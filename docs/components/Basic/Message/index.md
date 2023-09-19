# Message 消息提示

常用于主动操作后的反馈提示。
:::tip

bug：文档示例演示无弹出动画过渡效果，开发环境正常呈现。

:::

## 基本使用

从顶部出现，3 秒后自动消失。

:::tip

MMCAT-UI 还注册了一个全局的 $message 方法用于调用。

`import { getCurrentInstance } from "vue"; `

`const instance = getCurrentInstance();`

`const $message = instance?.appContext.config.globalProperties.$message;`  
:::

<div class="example">
  <div class="item">
    <mc-button type="info" @click="show">Show message</mc-button>
  </div>
</div>

::: details Show Code

```vue
<script setup lang="ts">
import { McMessage } from "mmcat-ui";

const show1 = () => {
  McMessage({
    type: "info",
    message: "this is a message",
    duration: 3000,
  });
};
</script>

<template>
  <div class="item">
    <mc-button type="info" @click="show1">Show message</mc-button>
  </div>
</template>
```

:::

## 不同状态

用来显示「成功、警告、危险、消息」类的操作反馈

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，默认为 info。 此时正文内容以 message 的值传入。

<div class="example">
  <div class="item">
    <mc-button type="success" @click="show1">success</mc-button>
  </div>
  <div class="item">
    <mc-button type="warning" @click="show2">warning</mc-button>
  </div>
  <div class="item">
    <mc-button type="danger" @click="show3">danger</mc-button>
  </div>
  <div class="item">
    <mc-button type="info" @click="show4">info</mc-button>
  </div>
</div>

::: details Show Code

```vue
<template>
  <div class="item">
    <mc-button type="success" @click="show1">success</mc-button>
    <mc-button type="warning" @click="show2">warning</mc-button>
    <mc-button type="danger" @click="show3">danger</mc-button>
    <mc-button type="info" @click="show4">info</mc-button>
  </div>
</template>

<script setup lang="ts">
import { McMessage } from "mmcat-ui";

const show1 = () => {
  McMessage({
    type: "success",
    message: "Congrats, this is a success message",
    duration: 3000,
  });
};
const show2 = () => {
  McMessage({
    type: "warning",
    message: "Warning, this is a warning message.",
    duration: 3000,
  });
};
const show3 = () => {
  McMessage({
    type: "danger",
    message: "Oops, this is a danger message.",
    duration: 3000,
  });
};
const show4 = () => {
  McMessage({
    type: "info",
    message: "this is a message.",
    duration: 3000,
  });
};
</script>
```

:::

<script setup lang="ts">
import { McMessage } from "mmcat-ui";

const show = () => {
  McMessage({
    type: "info",
    message: "this is a message",
    duration: 3000,
  });
};

const show1 = () => {
  McMessage({
    type: "success",
    message: "Congrats, this is a success message",
    duration: 3000,
  });
};
const show2 = () => {
  McMessage({
    type: "warning",
    message: "Warning, this is a warning message.",
    duration: 3000,
  });
};
const show3 = () => {
  McMessage({
    type: "danger",
    message: "Oops, this is a danger message.",
    duration: 3000,
  });
};
const show4 = () => {
  McMessage({
    type: "info",
    message: "this is a message.",
    duration: 3000,
  });
};
</script>
<style scoped>
  .example {
    display: flex;
    justify-content: space-evenly;
    border: 1px solid #dcdfe6; 
    border-radius: 5px;
    padding:20px;
  }
</style>

## 全局方法

MMCAT-UI 为 app.config.globalProperties 添加了全局方法 $message。 因此在 vue 实例中你可以使用当前页面中的调用方式调用 Message

## 单独引用

```vue
import { McMessage } from "mmcat-ui";
```

## API

### Message 配置项

| 属性名   | 说明     | 类型                                           | 默认值 |
| -------- | -------- | ---------------------------------------------- | ------ |
| message  | 消息文字 | `string`                                       | info   |
| type     | 消息类型 | ` 'success' \| 'warning' \|'danger' \| 'info'` | —      |
| duration | 显示时间 | `number`                                       | 3000   |
