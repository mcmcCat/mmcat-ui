<script setup lang="ts">
import { nextTick, ref, getCurrentInstance } from "vue";
import {
  Edit,
  User,
  Search,
  // Error,
  // Warning,
  // Success,
} from "@mmcat-ui/components/iconSvg"; // button的icon的props用法需要单独引入
// } from "mmcat-ui";

import { McMessage } from "../../packages/index";
// import { McMessage } from "mmcat-ui";

const instance = getCurrentInstance();
console.log(instance);

const $message = instance?.appContext.config.globalProperties.$message;

const show1 = () => {
  McMessage({
    type: "success",
    message: "Congrats, this is a success message",
    duration: 113000,
  });
};
const show2 = () => {
  McMessage({
    type: "warning",
    message: "Warning, this is a warning message.",
    duration: 113000,
  });
};
const show3 = () => {
  $message({
    type: "danger",
    message: "Oops, this is a danger message.",
    duration: 113000,
  });
};
const show4 = () => {
  $message({
    type: "info",
    message: "this is a message.",
    duration: 113000,
  });
};

const buttonRef = ref();
nextTick(() => {
  console.log("buttonRef", buttonRef.value.ref);
});
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
    <h1>message组件：</h1>
    <div class="item">
      <mc-button type="success" @click="show1">McMessage</mc-button>
    </div>
    <div class="item">
      <mc-button type="warning" @click="show2">McMessage</mc-button>
    </div>
    <div class="item">
      <mc-button type="danger" @click="show3">$message</mc-button>
    </div>
    <div class="item">
      <mc-button type="info" @click="show4">$message</mc-button>
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
