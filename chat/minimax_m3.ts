/**
 * Chat example: MiniMax-M3 via the OpenAI-compatible PowerTokens API.
 * Run: POWERTOKENS_API_KEY=... npx tsx chat/minimax_m3.ts
 */
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.POWERTOKENS_API_KEY,
  baseURL: "https://api.powertokens.ai/v1",
});

const resp = await client.chat.completions.create({
  model: "MiniMax-M3",
  messages: [
    { role: "system", content: "You are a concise assistant." },
    { role: "user", content: "Describe Paris in one sentence." },
  ],
  temperature: 0.3,
});

console.log(resp.choices[0].message.content);
