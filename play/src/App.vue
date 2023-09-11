<script setup lang="ts">
import { nextTick, ref } from "vue";
import {
  Edit,
  User,
  Search,
  Error,
  Warning,
  Success,
} from "@mmcat-ui/components/iconSvg"; // button的icon的props用法需要单独引入
// } from "mmcat-ui";

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
    <div class="icon">
      <div class="item">
        <mc-icon :size="30" :color="'#3451b2'">
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
        <mc-icon :size="30" :color="'#3451b2'">
          <!-- SVG组件图标 -->
          <Search />
        </mc-icon>
      </div>
    </div>
    <h1>button组件：</h1>
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
    <hr />
    <div class="item">
      <mc-button plain>Plain</mc-button>
      <mc-button type="primary" plain>Primary</mc-button>
      <mc-button type="success" plain>Success</mc-button>
      <mc-button type="info" plain>Info</mc-button>
      <mc-button type="warning" plain>Warning</mc-button>
      <mc-button type="danger" plain>Danger</mc-button>
    </div>
    <hr />
    <div class="item">
      <mc-button round>Round</mc-button>
      <mc-button type="primary" round>Primary</mc-button>
      <mc-button type="success" round>Success</mc-button>
      <mc-button type="info" round>Info</mc-button>
      <mc-button type="warning" round>Warning</mc-button>
      <mc-button type="danger" round>Danger</mc-button>
    </div>
    <hr />
    <div class="item">
      <mc-button :icon="Edit" circle />
      <!-- 通过插槽实现，支持全局注册 -->
      <mc-button type="primary" circle>
        <template #icon><User /></template>
      </mc-button>
      <!-- 通过props的icon属性实现，需要单独引入IconSvg组件 -->
      <mc-button type="success" :icon="Search" circle />
      <mc-button type="info" :icon="Error" circle />
      <mc-button type="warning" :icon="Warning" circle />
      <mc-button type="danger" :icon="Success" circle />
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
      <mc-button :icon="Edit" size="large" circle />
      <mc-button :icon="Edit" circle />
      <mc-button :icon="Edit" size="small" circle />
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
