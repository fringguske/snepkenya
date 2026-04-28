import { NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';
import { snepBaseContext } from '@/lib/snepBaseContext';

export const runtime = 'nodejs';

const POLICY_MD_PATH = path.join(process.cwd(), 'lib', 'policies', 'snep-policy-2025.md');

function safeReadUtf8(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        console.warn(`[Chat API] Could not read policy file at ${filePath}:`, err?.message ?? err);
        return '';
    }
}

function normalizeHeading(title) {
    return title.trim().replace(/:\s*$/, '');
}

function isPolicyHeading(line) {
    const t = line.trim();
    if (!t) return false;
    if (/^_+$/.test(t)) return true; // separator line
    if (t === 'Dividends') return true;
    if (/^Requirements to become a member$/i.test(t)) return true;
    if (t.endsWith(':') && t.length <= 40) return true;
    const isAllCaps = t === t.toUpperCase();
    if (isAllCaps && /^[A-Z0-9][A-Z0-9 .&()/,'-]{2,}$/.test(t) && t.length <= 80) return true;
    return false;
}

function parsePolicyMarkdown(md) {
    if (!md) return [];

    const lines = md.split(/\r?\n/);
    const bodyStart = Math.max(0, lines.findIndex((l) => l.includes('GROUP CONSTITUTION')));
    const body = lines.slice(bodyStart);

    const sections = [];
    let currentTitle = 'SNEP POLICY-2025';
    let currentLines = [];

    const pushSection = () => {
        const text = currentLines.join('\n').trim();
        const title = normalizeHeading(currentTitle);
        if (text.length === 0) return;
        sections.push({
            title,
            text,
            search: `${title}\n${text}`.toLowerCase(),
        });
    };

    for (const rawLine of body) {
        const line = rawLine.trimEnd();
        if (!line.trim()) continue;

        if (/^_+$/.test(line.trim())) {
            continue; // ignore separator
        }

        if (isPolicyHeading(line)) {
            pushSection();
            currentTitle = line;
            currentLines = [];
            continue;
        }

        currentLines.push(line.trim());
    }

    pushSection();
    return sections;
}

const policySections = parsePolicyMarkdown(safeReadUtf8(POLICY_MD_PATH));

function tokenize(text) {
    return (text || '')
        .toLowerCase()
        // keep numbers and letters
        .replace(/[^a-z0-9]+/g, ' ')
        .split(/\s+/)
        .filter((t) => t.length >= 3)
        .slice(0, 40);
}

function scoreSection(tokens, sectionSearchText) {
    let score = 0;
    for (const token of tokens) {
        if (sectionSearchText.includes(token)) score += 1;
    }
    return score;
}

function buildPolicyExcerpts(question) {
    if (!policySections.length) {
        return { excerpts: '', usedTitles: [] };
    }

    const tokens = tokenize(question);
    const ranked = policySections
        .map((sec) => ({ sec, score: scoreSection(tokens, sec.search) }))
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map((x) => x.sec);

    if (ranked.length === 0) {
        return { excerpts: '', usedTitles: [] };
    }

    const excerpts = ranked
        .map((sec) => `SECTION: ${sec.title}\n${sec.text}`)
        .join('\n\n')
        .slice(0, 2600);

    return { excerpts, usedTitles: ranked.map((s) => s.title) };
}

export async function POST(req) {
    try {
        const { messages: userHistory } = await req.json();

        // 1. Get Key
        let apiKey = process.env.gptchat;

        if (!apiKey) {
            console.error("[Chat API] Missing API Key");
            return NextResponse.json({ reply: "Configuration Error: API Key missing." }, { status: 500 });
        }

        // 2. Clean Key
        apiKey = apiKey.trim();

        // 3. Debug Log relative to history
        console.log(`[Chat API] Processing ${userHistory.length} messages.`);

        const lastUserMessage = [...userHistory].reverse().find((m) => m?.role === 'user')?.content ?? '';
        const { excerpts: policyExcerpts } = buildPolicyExcerpts(lastUserMessage);

        // 4. Construct Full Conversation
        // System Prompt -> Sources -> History
        const systemPrompt = `You are the SNEP Assistant for SNEP Kenya.

GOAL
Give accurate, helpful answers about SNEP, membership, loans/advances, and related policies.

STRICT ACCURACY RULES


1) If there is a conflict between sources, prefer SNEP POLICY-2025 for RLF rules and figures.
2) Keep numbers and requirements exact (do not round or “approximate”).
3) When you use a policy rule, include a short "Source:" line that names the policy section(s) you relied on.
4) If a user is getting out of snep context, engage in kind manner but try to bring them back to the context.

STYLE
- Clear, concise, and practical.
- If the user asks a broad question, ask 1 clarifying question before giving a detailed answer.

SOURCES
SNEP WEBSITE FACTS
${snepBaseContext}

SNEP POLICY-2025 (EXCERPTS)
${policyExcerpts || ''}`;

        const fullConversation = [
            {
                role: "system",
                content: systemPrompt
            },
            ...userHistory
        ];

        // 5. Direct Fetch call to OpenRouter
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "SNEP Kenya",
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo",
                messages: fullConversation,
                temperature: 0.2,
            })
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error("[Chat API] Upstream Error:", response.status, errorBody);
            // Return the exact error to the user for debugging
            return NextResponse.json({ reply: `API Error ${response.status}: ${errorBody} (Key Len: ${apiKey.length})` });
        }

        const data = await response.json();
        console.log("[Chat API] Success");
        return NextResponse.json({ reply: data.choices[0].message.content });

    } catch (error) {
        console.error("[Chat API] Internal Error:", error);
        return NextResponse.json({ reply: `Server Error: ${error.message}` });
    }
}
