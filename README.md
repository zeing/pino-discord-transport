# @zeing/pino-discord-transport

[![npm version](https://img.shields.io/npm/v/@zeing/pino-discord-transport.svg)](https://www.npmjs.com/package/@zeing/pino-discord-transport)
![bun support](https://img.shields.io/badge/runtime-bun-black?logo=bun)


> A Pino transport that sends logs directly to a Discord webhook.
> Built with **Bun**.

Lightweight alternative inspired by existing Discord transports — optimized for modern runtimes.


## ✨ Features

* 🚀 Fast and lightweight
* 🔌 Native Pino v7+ transport
* 🧵 Supports Discord `threadId`
* 🧹 Optional field exclusion

## 📦 Installation

### Bun (recommended)

```bash
bun add @zeing/pino-discord-transport
```

### npm

```bash
npm install @zeing/pino-discord-transport
```


## 🚀 Basic Usage

```ts
import pino from 'pino'

const logger = pino({
  transport: {
    targets: [
      {
        level: 'warn',
        target: '@zeing/pino-discord-transport',
        options: {
          webhookURL: 'YOUR_DISCORD_WEBHOOK_URL',
          threadId: 'THREAD_ID', // optional
          excludeFields: ['pid', 'hostname'], // optional
        },
      },
    ],
  },
})

logger.warn('This will be sent to Discord')
logger.error({ err, userId, ...},'This will be sent to Discord')

```

## ⚙️ Options

| Option          | Type       | Required | Description                               |
| --------------- | ---------- | -------- | ----------------------------------------- |
| `webhookURL`    | `string`   | ✅ Yes    | Discord webhook URL                       |
| `threadId`      | `string`   | ❌ No     | Send message to a specific Discord thread |
| `excludeFields` | `string[]` | ❌ No     | Fields to remove from log payload         |


## 📝 Log Level Behavior

Only logs at or above the configured `level` will be sent.

Example:

```ts
level: 'warn'
```

Will send:

* `warn`
* `error`
* `fatal`

Will NOT send:

* `info`
* `debug`
* `trace`


## 🧵 Thread Support

If your webhook belongs to a forum or thread-enabled channel:

```ts
threadId: '123456789012345678'
```

Logs will be posted inside that thread.


## 🟢 Bun Compatibility

This package works natively with **Bun**.

```bash
bun run index.ts
```

No special configuration required.
