import { NextResponse } from 'next/server';
import { snepContext } from '@/lib/snepContext';

export async function POST(req) {
    try {
        const { message } = await req.json();

        // 1. Get Key
        let apiKey = process.env.gptchat;

        if (!apiKey) {
            console.error("[Chat API] Missing API Key");
            return NextResponse.json({ reply: "Configuration Error: API Key missing." }, { status: 500 });
        }

        // 2. Clean Key
        apiKey = apiKey.trim();

        // 3. Debug Log (Server Side)
        // We log the first 5 and last 4 chars to verify it's the correct key without leaking the whole thing
        const keyPreview = apiKey.length > 10
            ? `${apiKey.substring(0, 5)}...${apiKey.substring(apiKey.length - 4)}`
            : "KEY_TOO_SHORT";

        console.log(`[Chat API] Using Key: ${keyPreview} (Length: ${apiKey.length})`);

        // 4. Direct Fetch call to OpenRouter
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
                messages: [
                    { role: "system", content: `You are SNEP Assistant. Use this context: ${snepContext.substring(0, 3000)}` },
                    { role: "user", content: message }
                ],
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
