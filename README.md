# PowerTokens TypeScript / Node.js Examples

TypeScript and Node.js examples for building AI applications with the **PowerTokens unified AI API**.

PowerTokens provides an OpenAI-compatible API for accessing multiple AI model families through one API endpoint.

[Get started](https://www.powertokens.ai/?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript) · [Docs](https://docs.powertokens.ai/en/guides/api-key-and-model-call?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript) · [Models](https://www.powertokens.ai/en/models?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript)

## What you can build

- AI applications with Node.js
- LLM and chat applications
- AI agents and developer tools
- Multi-model applications
- Applications using OpenAI-compatible SDKs

## Requirements

- Node.js 18+
- A PowerTokens API key
- The OpenAI Node.js SDK

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

## Useful links

- Website: https://www.powertokens.ai
- Documentation: https://docs.powertokens.ai
- Model catalog: https://www.powertokens.ai/en/models
- API keys: https://www.powertokens.ai/en/api-keys
- Discord: https://discord.gg/JtgtRdhJVS

## API key

Create and manage your API key from  [PowerTokens dashboard](https://www.powertokens.ai/api-keys?utm_source=github&utm_medium=readme&utm_campaign=sdk-typescript).

Keep API keys private. Use environment variables instead of hard-coding API keys in your source code.

## Examples

This repository contains practical TypeScript and Node.js examples for working with the PowerTokens API.

Use these examples as starting points and adapt the model ID and request parameters to your application.

## Why PowerTokens

- One API: access multiple AI model families through a unified API
- OpenAI-compatible: use familiar OpenAI SDK patterns
- Developer-focused: simplify integrations across multiple AI models

## Contributing

Have a useful TypeScript example or improvement? Open an issue or pull request with a clear description of the change.

Commit：

```text
docs: improve TypeScript examples README
