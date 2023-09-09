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
      <mc-icon :color="'green'" :size="30">
        <!-- 字体图标 -->
        <i class="iconfont icon-bianji"></i>
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
      <hr />
      <mc-button plain>Plain</mc-button>
      <mc-button type="primary" plain>Primary</mc-button>
      <mc-button type="success" plain>Success</mc-button>
      <mc-button type="info" plain>Info</mc-button>
      <mc-button type="warning" plain>Warning</mc-button>
      <mc-button type="danger" plain>Danger</mc-button>
      <hr />
      <mc-button round>Round</mc-button>
      <mc-button type="primary" round>Primary</mc-button>
      <mc-button type="success" round>Success</mc-button>
      <mc-button type="info" round>Info</mc-button>
      <mc-button type="warning" round>Warning</mc-button>
      <mc-button type="danger" round>Danger</mc-button>
      <hr />
      <mc-button :icon="EditIcon" circle />
      <mc-button type="primary" :icon="EditIcon" circle />
      <mc-button type="success" :icon="EditIcon" circle />
      <mc-button type="info" :icon="EditIcon" circle />
      <mc-button type="warning" :icon="EditIcon" circle />
      <mc-button type="danger" :icon="EditIcon" circle />
    </div>
  </div>
</template>

<style>
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
</style>
