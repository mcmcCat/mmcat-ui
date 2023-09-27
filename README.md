# mmcat-ui

_该组件库采用 `Vue@3.3.4 `+ `TypeScript@5.2.2` + `Vite@4.4.5` + `Sass@1.66.1` 实现！_<br/>
_所有组件样式使用 BEM 设计模式，效仿 Element-Plus 官方样式架构！_<br/>
_开箱即用，提供常用基础 UI 组件，以及探讨一些组件的常用**性能优化**方案！_<br/>

## Document & Online preview

[VUE MMCAT UI](https://mcmccat.github.io/mmcat-ui/)

## Install & Use

```bash
pnpm i mmcat-ui
# or
npm install mmcat-ui
# or
yarn add mmcat-ui
```

**Global**

```ts
import { createApp } from "vue";
import App from "./App.vue";

import McElementPlus from "mmcat-ui";
import "mmcat-ui/dist/style.css";

const app = createApp(App);
app.use(McElementPlus);
```

**Local**

```vue
<script setup lang="ts">
import { McButton } from "mmcat-ui";
import "mmcat-ui/dist/style.css";
</script>
```

## Project

- Get the project code

```sh
git clone https://github.com/mcmcCat/mmcat-ui.git
```

- Install dependencies

```sh
cd mmcat-ui

pnpm i
```

- Run project

```sh
pnpm dev
```

## Components

| Component name | Descriptions |
| :------------- | :----------- |
| Button         | 按钮         |
| Icon           | 图标         |
| Message        | 消息提示     |
| Input          | 输入框       |

## Lab Components

| Component name | Descriptions |
| :------------- | :----------- |
| Table          | 表格         |
