# 快速上手

## 安装

**With PNPM**

```bash
$ pnpm i mmcat-ui
# or
$ pnpm add mmcat-ui
```

**With YARN**

```bash
$ yarn add mmcat-ui
```

**With NPM**

```bash
$ npm i mmcat-ui
```

## 使用

> **Global**

```ts
import { createApp } from "vue";
import App from "./App.vue";

import McElementPlus from "mmcat-ui";
import "mmcat-ui/dist/style.css";

const app = createApp(App);
app.use(McElementPlus);

app.mount("#app");
```

> **Local**

```vue
<script setup lang="ts">
import { McButton } from "mmcat-ui";
import "mmcat-ui/dist/style.css";
</script>

<template>
  <mc-button></mc-button>
</template>
```
