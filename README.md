# PowerTokens TypeScript / Node.js Examples

TypeScript and Node.js examples for building AI applications with the **PowerTokens unified AI API**.

**Unified API for video, image, audio, and LLMs — no Chinese account required.** OpenAI-compatible.

[Get started](https://www.powertokens.ai/?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript) · [Docs](https://docs.powertokens.ai/en/guides/api-key-and-model-call?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript) · [Models](https://www.powertokens.ai/en/models?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript)

## Examples

| Example | Model | Path |
|---------|-------|------|
| MiniMax chat | `MiniMax-M3` | [`chat/minimax_m3.ts`](chat/minimax_m3.ts) |
| Qwen chat | `qwen3-max` | [`chat/qwen3_max.ts`](chat/qwen3_max.ts) |
| GLM chat | `glm-5.2` | [`chat/glm_5_2.ts`](chat/glm_5_2.ts) |

## Requirements

- Node.js 18+
- A PowerTokens API key
- The OpenAI Node.js SDK

## Install

```bash
npm install openai
# optional runner for .ts files:
npm install -D tsx
```

## Quickstart

Base URL for OpenAI-compatible SDKs: `https://api.powertokens.ai/v1`

```bash
export POWERTOKENS_API_KEY=your_key
npx tsx chat/minimax_m3.ts
# or: npx tsx chat/qwen3_max.ts
# or: npx tsx chat/glm_5_2.ts
```

Equivalent SDK snippet:

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

Create an API key in the [dashboard](https://www.powertokens.ai/en/api-keys?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript).

## Why PowerTokens

- One API: video, image, audio, and LLM model families
- OpenAI-compatible: reuse familiar OpenAI SDK patterns
- No Chinese mainland account required

## Useful links

- Website: [powertokens.ai](https://www.powertokens.ai/?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript)
- Documentation: [docs.powertokens.ai](https://docs.powertokens.ai/?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript)
- Model catalog: [Models](https://www.powertokens.ai/en/models?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript)
- API keys: [API keys](https://www.powertokens.ai/en/api-keys?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript)
- Discord: https://discord.gg/JtgtRdhJVS

**Get free credits to start building** — [powertokens.ai](https://www.powertokens.ai/?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript)
