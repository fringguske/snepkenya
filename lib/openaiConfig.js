import OpenAI from 'openai';

const apiKey = process.env.gptchat;

if (!apiKey) {
    console.error("Error: 'gptchat' environment variable is missing.");
} else {
    // Debug log to confirm key loading (truncated for security)
    const trimmedKey = apiKey.trim();
    console.log(`[Config] Loaded API Key: ${trimmedKey.substring(0, 8)}... (Length: ${trimmedKey.length})`);
}

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: apiKey ? apiKey.trim() : "MISSING_KEY",
    defaultHeaders: {
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "SNEP Website",
    },
});

export default openai;
