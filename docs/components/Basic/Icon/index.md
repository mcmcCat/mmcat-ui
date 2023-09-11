# Icon 图标

MMCAT-UI 提供了一套常用的图标集合。

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件库，或者单独引入才能够直接在项目里使用。

- 如若需要查看所有可用的 SVG 图标请查阅 [@mmcat-ui/components/iconSvg](https://github.com/mcmcCat/mmcat-ui)

## 基础用法

SVG 组件图标、字体图标

<div class="example">
  <div class="item">
    <mc-icon :size="30">
      <!-- SVG组件图标 -->
      <Edit />
    </mc-icon>
  </div>
  <div class="item">
    <mc-icon :size="30">
      <!-- 字体图标(需要把iconfont.css里样式修改为font-size: inherit;) ，才能让size生效-->
      <i class="iconfont icon-bianji" />
    </mc-icon>
  </div>
</div>

::: details Show Code

```vue
<script setup lang="ts">
// import { Edit } from "mmcat-ui"; // 可以单独引入
</script>

<template>
  <div class="item">
    <mc-icon :size="size" :color="color">
      <!-- SVG组件图标 -->
      <Edit />
    </mc-icon>
  </div>
  <div class="item">
    <mc-icon :size="size" :color="color">
      <!-- 字体图标(需要把iconfont.css里样式修改为font-size: inherit;) ，才能让size生效-->
      <i class="iconfont icon-bianji" />
    </mc-icon>
  </div>
</template>

<style>
@import "./src/asset/iconfont/iconfont.css";
</style>
```

:::

## 结合 mc-icon 使用

mc-icon 为 raw SVG 图标提供额外的属性, 提供的详细属性请继续阅读。

<div class="example flex">
  <div class="item">
    <mc-icon :size="20">
      <!-- SVG组件图标 -->
      <Edit />
    </mc-icon>
  </div>
  <div class="item">
    <mc-icon :size="30" :color="'#3451b2'">
      <!-- SVG组件图标 -->
      <User />
    </mc-icon>
  </div>
  <div class="item">
    <mc-icon :size="20">
      <!-- SVG组件图标 -->
      <Search />
    </mc-icon>
  </div>
</div>

::: details Show Code

```vue
<script setup lang="ts">
// import {
//   Edit,
//   User,
//   Search,
// } from "mmcat-ui"; // 可以单独引入
</script>

<template>
  <div class="item">
    <mc-icon :size="20">
      <!-- SVG组件图标 -->
      <Edit />
    </mc-icon>
  </div>
  <div class="item">
    <mc-icon :size="30" :color="'#3451b2'">
      <!-- SVG组件图标 -->
      <User />
    </mc-icon>
  </div>
  <div class="item">
    <mc-icon :size="20">
      <!-- SVG组件图标 -->
      <Search />
    </mc-icon>
  </div>
</template>
```

:::

## 直接使用 SVG 图标

<div class="example flex" style="font-size: 20px">
  <!-- 由于SVG图标默认不携带任何属性 -->
  <!-- 你需要直接提供它们 -->
  <Edit style="width: 1em; height: 1em; margin-right: 8px" />
  <User style="width: 1em; height: 1em; margin-right: 8px" />
  <Search style="width: 1em; height: 1em; margin-right: 8px" />
  <Error style="width: 1em; height: 1em; margin-right: 8px" />
  <Warning style="width: 1em; height: 1em; margin-right: 8px" />
  <Success style="width: 1em; height: 1em; margin-right: 8px" />
</div>

::: details Show Code

```vue
<script setup lang="ts">
// import {
// Edit,
// User,
// Search,
// Error,
// Warning,
// Success,
// } from "mmcat-ui"; // 可以单独引入
</script>

<template>
  <div style="font-size: 20px">
    <!-- 由于SVG图标默认不携带任何属性 -->
    <!-- 你需要直接提供它们 -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
    <User style="width: 1em; height: 1em; margin-right: 8px" />
    <Search style="width: 1em; height: 1em; margin-right: 8px" />
    <Error style="width: 1em; height: 1em; margin-right: 8px" />
    <Warning style="width: 1em; height: 1em; margin-right: 8px" />
    <Success style="width: 1em; height: 1em; margin-right: 8px" />
  </div>
</template>
```

:::

<style scoped>
@import '../../../../play/src/asset/iconfont/iconfont.css';

.example {
  /* flex-direction: column; */
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  padding:20px;
}
.example .item {
  margin: 10px 0;
} 

.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

## API

### Attributes

| 属性名 | 说明                        | 类型                | 默认值       |
| ------ | --------------------------- | ------------------- | ------------ |
| color  | svg 的 fill 颜色            | `string`            | 继承颜色     |
| size   | SVG 图标的大小，size x size | `number` / `string` | 继承字体大小 |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
