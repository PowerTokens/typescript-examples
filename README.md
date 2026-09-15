# PowerTokens TypeScript / Node examples

> Unified API for Chinese AI models — **no Chinese account required**. OpenAI-compatible.

[Get started](https://www.powertokens.ai/?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript) · [Docs](https://docs.powertokens.ai/en/guides/api-key-and-model-call?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript)

## Install

```bash
npm install openai
```

## Quickstart

```ts
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
```

## Links

- https://www.powertokens.ai
- https://docs.powertokens.ai
- Discord: https://discord.gg/JtgtRdhJVS
