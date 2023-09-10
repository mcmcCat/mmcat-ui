# Button 按钮

常用的操作按钮。

## 基本使用

使用 `type="xxx"`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<div class="example">
  <div class="item">
    <mc-button type="default">Default</mc-button>
    <mc-button type="primary" ref="buttonRef" @click="handlerClick">
      Primary
    </mc-button>
    <mc-button type="success">Success</mc-button>
    <mc-button type="info">Info</mc-button>
    <mc-button type="warning">Warning</mc-button>
    <mc-button type="danger">Danger</mc-button>
  </div>
  <div class="item">
    <mc-button plain>Plain</mc-button>
    <mc-button type="primary" plain>Primary</mc-button>
    <mc-button type="success" plain>Success</mc-button>
    <mc-button type="info" plain>Info</mc-button>
    <mc-button type="warning" plain>Warning</mc-button>
    <mc-button type="danger" plain>Danger</mc-button>
  </div>
  <div class="item">
    <mc-button round>Round</mc-button>
    <mc-button type="primary" round>Primary</mc-button>
    <mc-button type="success" round>Success</mc-button>
    <mc-button type="info" round>Info</mc-button>
    <mc-button type="warning" round>Warning</mc-button>
    <mc-button type="danger" round>Danger</mc-button>
  </div>
  <div class="item">
    props：
    <mc-button :icon="EditIcon" circle />
    <mc-button type="primary" :icon="EditIcon" circle />
    <mc-button type="success" :icon="EditIcon" circle />
    <mc-button type="info" :icon="EditIcon" circle />
    <mc-button type="warning" :icon="EditIcon" circle />
    <mc-button type="danger" :icon="EditIcon" circle />
    插槽：
    <mc-button type="danger" circle>
      <template #icon><EditIcon /></template>
    </mc-button>
  </div>
</div>

::: details Show Code

```vue
<template>
  <div class="item">
    <mc-button type="default">Default</mc-button>
    <mc-button type="primary">Primary</mc-button>
    <mc-button type="success">Success</mc-button>
    <mc-button type="info">Info</mc-button>
    <mc-button type="warning">Warning</mc-button>
    <mc-button type="danger">Danger</mc-button>
  </div>
  <div class="item">
    <mc-button plain>Plain</mc-button>
    <mc-button type="primary" plain>Primary</mc-button>
    <mc-button type="success" plain>Success</mc-button>
    <mc-button type="info" plain>Info</mc-button>
    <mc-button type="warning" plain>Warning</mc-button>
    <mc-button type="danger" plain>Danger</mc-button>
  </div>
  <div class="item">
    <mc-button round>Round</mc-button>
    <mc-button type="primary" round>Primary</mc-button>
    <mc-button type="success" round>Success</mc-button>
    <mc-button type="info" round>Info</mc-button>
    <mc-button type="warning" round>Warning</mc-button>
    <mc-button type="danger" round>Danger</mc-button>
  </div>
  <div class="item">
    props：
    <mc-button :icon="EditIcon" circle />
    <mc-button type="primary" :icon="EditIcon" circle />
    <mc-button type="success" :icon="EditIcon" circle />
    <mc-button type="info" :icon="EditIcon" circle />
    <mc-button type="warning" :icon="EditIcon" circle />
    <mc-button type="danger" :icon="EditIcon" circle />
    插槽：
    <mc-button type="danger" circle>
      <template #icon><EditIcon /></template>
    </mc-button>
  </div>
</template>
```

:::

## 禁用

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。

<div class="example">
  <div class="item">
    <mc-button disabled>Default</mc-button>
    <mc-button type="primary" disabled>Primary</mc-button>
    <mc-button type="success" disabled>Success</mc-button>
    <mc-button type="info" disabled>Info</mc-button>
    <mc-button type="warning" disabled>Warning</mc-button>
    <mc-button type="danger" disabled>Danger</mc-button>
  </div>
  <div class="item">
    <mc-button plain disabled>Plain</mc-button>
    <mc-button type="primary" plain disabled>Primary</mc-button>
    <mc-button type="success" plain disabled>Success</mc-button>
    <mc-button type="info" plain disabled>Info</mc-button>
    <mc-button type="warning" plain disabled>Warning</mc-button>
    <mc-button type="danger" plain disabled>Danger</mc-button>
  </div>
</div>

::: details Show Code

```vue
<template>
  <div class="item">
    <mc-button disabled>Default</mc-button>
    <mc-button type="primary" disabled>Primary</mc-button>
    <mc-button type="success" disabled>Success</mc-button>
    <mc-button type="info" disabled>Info</mc-button>
    <mc-button type="warning" disabled>Warning</mc-button>
    <mc-button type="danger" disabled>Danger</mc-button>
  </div>
  <div class="item">
    <mc-button plain disabled>Plain</mc-button>
    <mc-button type="primary" plain disabled>Primary</mc-button>
    <mc-button type="success" plain disabled>Success</mc-button>
    <mc-button type="info" plain disabled>Info</mc-button>
    <mc-button type="warning" plain disabled>Warning</mc-button>
    <mc-button type="danger" plain disabled>Danger</mc-button>
  </div>
</template>
```

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

<div class="example">
  <div class="item">
    <mc-button size="large">Large</mc-button>
    <mc-button>Default</mc-button>
    <mc-button size="small">Small</mc-button>
  </div>
  <div class="item">
    <mc-button size="large" round>Large</mc-button>
    <mc-button round>Default</mc-button>
    <mc-button size="small" round>Small</mc-button>
  </div>
  <div class="item">
    <mc-button :icon="EditIcon" size="large" circle />
    <mc-button :icon="EditIcon" circle />
    <mc-button :icon="EditIcon" size="small" circle />
  </div>
</div>

::: details Show Code

```vue
<template>
  <div class="item">
    <mc-button size="large">Large</mc-button>
    <mc-button>Default</mc-button>
    <mc-button size="small">Small</mc-button>
  </div>
  <div class="item">
    <mc-button size="large" round>Large</mc-button>
    <mc-button round>Default</mc-button>
    <mc-button size="small" round>Small</mc-button>
  </div>
  <div class="item">
    <mc-button :icon="EditIcon" size="large" circle />
    <mc-button :icon="EditIcon" circle />
    <mc-button :icon="EditIcon" size="small" circle />
  </div>
</template>
```

:::

<script setup>
</script>

<style>
.example {
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  padding:20px;
}
.example .item {
  margin: 10px 0;
} 
</style>
