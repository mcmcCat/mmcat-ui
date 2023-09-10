<script setup lang="ts">
import EditIcon from "./EditIcon.vue";
import { nextTick, ref } from "vue";

const buttonRef = ref();
nextTick(() => {
  console.log("buttonRef", buttonRef.value.ref);
});

const handlerClick = (e: Event) => {
  console.log(e);
};
</script>

<template>
  <div class="play-container">
    <h1>icon组件：</h1>
    <div>
      <mc-icon :color="'green'" :size="30">
        <!-- SVG组件图标 -->
        <EditIcon />
      </mc-icon>
      <hr />
      <mc-icon :color="'green'" :size="30">
        <!-- 字体图标 -->
        <i class="iconfont icon-geren"></i>
      </mc-icon>
    </div>
    <h1>button组件：</h1>
    <div>
      <mc-button type="default">Default</mc-button>
      <mc-button type="primary" ref="buttonRef" @click="handlerClick">
        Primary
      </mc-button>
      <mc-button type="success">Success</mc-button>
      <mc-button type="info">Info</mc-button>
      <mc-button type="warning">Warning</mc-button>
      <mc-button type="danger">Danger</mc-button>
    </div>
    <hr />
    <div>
      <mc-button plain>Plain</mc-button>
      <mc-button type="primary" plain>Primary</mc-button>
      <mc-button type="success" plain>Success</mc-button>
      <mc-button type="info" plain>Info</mc-button>
      <mc-button type="warning" plain>Warning</mc-button>
      <mc-button type="danger" plain>Danger</mc-button>
    </div>
    <hr />
    <div>
      <mc-button round>Round</mc-button>
      <mc-button type="primary" round>Primary</mc-button>
      <mc-button type="success" round>Success</mc-button>
      <mc-button type="info" round>Info</mc-button>
      <mc-button type="warning" round>Warning</mc-button>
      <mc-button type="danger" round>Danger</mc-button>
    </div>
    <hr />
    <div>
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
    <hr />
    <hr />
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
    <hr />
    <hr />
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
</template>

<style lang="scss" scoped>
@import "./asset/iconfont/iconfont.css";

.play-container {
  display: flex;
  flex-direction: column;
  height: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.example {
  display: flex;
  flex-direction: column;
  .item {
    margin: 10px 0;
  }
}
</style>
