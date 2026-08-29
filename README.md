# ui-kit-examples

Монорепозиторий на [pnpm workspaces](https://pnpm.io/workspaces): тема, пакеты компонентов (Reka UI и Vuetify 0) и два demo-приложения.

## Setup

```sh
pnpm install
```

Версии внешних зависимостей заданы в `pnpm-workspace.yaml` (`catalog`). Внутренние пакеты подключаются через `workspace:*`.

## Dev

```sh
pnpm dev:reka
pnpm dev:vuetify
```

## Build

```sh
pnpm build
```

## Type-check и lint

```sh
pnpm type-check
pnpm lint
```
