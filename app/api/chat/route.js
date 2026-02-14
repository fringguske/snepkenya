import { NextResponse } from 'next/server';
import { snepContext } from '@/lib/snepContext';

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

        // 4. Construct Full Conversation
        // System Prompt -> Context -> History
        const fullConversation = [
            {
                role: "system",
                content: `You are the SNEP Assistant. Your goal is to answer questions based strictly on the provided SNEP (Solution for Nature & Enterprise Programme) context.
                
                CONTEXT:
                ${snepContext.substring(0, 3500)}

                INSTRUCTIONS:
                1. If the user asks about SNEP, loans, membership, or projects, answer using the context.
                2. If the user asks about general topics, be flexible but try to relate it back to SNEP's mission where possible. 
                   - Do NOT start every response with "That's interesting but..." or "How does this relate to SNEP?".
                   - Instead, answer naturally and then optionally bridge back to SNEP if it feels organic.
                   - If the user just says "sure", "okay", or "thanks", respond conversationally based on previous context.
                3. Maintain conversation history (memory). If the user refers to a previous topic, use the conversation history to understand them.
                4. Keep answers concise and helpful.`
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
