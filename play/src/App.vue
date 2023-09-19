<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { User,Edit,McMessage } from '../../packages/index'
const value = ref("");
const lazyValue = ref("");
watchEffect(() => {
  console.log("value:", value.value);
});
watchEffect(() => {
  console.log("lazyValue:", lazyValue.value);
});

const show1 = () => {
  McMessage({
    type: "success",
    message: "Congrats, this is a success message",
    duration: 3000,
  });
};
</script>

<template>
  <div class="play-container">
    <h1>input组件：</h1>
    <h2>basic & lazy</h2>
    <div class="item">
      Input:
      <mc-input v-model="value" placeholder="Basic usage" />
    </div>
    <div class="item">
      lazyInput:
      <mc-input v-model.lazy="lazyValue" placeholder="Lazy usage" />
    </div>
    <h2>前缀后缀</h2>
    <div class="item">
      <mc-input v-model="value" placeholder="slots">
        <template #prefix>
          <User></User>
        </template>
        <template #suffix>
          <Edit></Edit>
        </template>
      </mc-input>
      <mc-input v-model="value" prefix="￥" suffix="RMB" placeholder="props" />
    </div>
    <h2>不同大小</h2>
    <div class="item">
      <mc-input v-model="value" size="large" placeholder="large" />
      <mc-input v-model="value" placeholder="default" />
      <mc-input v-model="value" size="small" placeholder="small" />
    </div>
    <h2>一键清空</h2>
    <div class="item">
      <mc-input v-model="value" allow-clear placeholder="input allow  clear" />
    </div>
    <h2>密码</h2>
    <div class="item">
      <mc-input v-model="value" password placeholder="password" />
    </div>
    <h2>禁用</h2>
    <div class="item">
      <mc-input v-model="value" disabled placeholder="disabled" />
    </div>
    <h1>message</h1>
    <div class="item">
      <mc-button type="success" @click="show1">success</mc-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.play-container {
  display: flex;
  flex-direction: column;
  height: 800px;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
