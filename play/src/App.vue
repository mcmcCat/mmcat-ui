<script setup lang="ts">
import { ref, watchEffect } from "vue";

const value = ref("");
const lazyValue = ref("");
watchEffect(() => {
  console.log("value:", value.value);
});
watchEffect(() => {
  console.log("lazyValue:", lazyValue.value);
});
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
          <svg
            t="1694423103645"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1104"
            width="18"
            height="18"
          >
            <path
              d="M512.4 523.3c-61.4 0-119.2-23.9-162.6-67.4s-67.4-101.2-67.4-162.6 23.9-119.2 67.4-162.6C393.2 87.3 451 63.3 512.4 63.3c61.4 0 119.2 23.9 162.6 67.4 43.4 43.4 67.4 101.2 67.4 162.6S718.5 412.5 675.1 456c-43.5 43.4-101.2 67.3-162.7 67.3z m0-400c-93.7 0-170 76.3-170 170s76.3 170 170 170 170-76.3 170-170-76.2-170-170-170zM929 959.4H96c-8.8 0-17.2-3.9-22.9-10.6s-8.2-15.6-6.7-24.3c16.3-98.5 70.2-188.6 151.7-253.9 81.8-65.6 186.3-101.7 294.4-101.7 108.1 0 212.6 36.1 294.4 101.7 81.5 65.3 135.4 155.5 151.7 253.9 1.4 8.7-1 17.6-6.7 24.3s-14.1 10.6-22.9 10.6z m-795.7-60h758.3C847.7 743 691.1 628.9 512.4 628.9c-178.6 0-335.2 114.1-379.1 270.5z"
              p-id="1105"
            ></path>
          </svg>
        </template>
        <template #suffix>
          <svg
            t="1694150475019"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="903"
            width="18"
            height="18"
          >
            <path
              d="M930.3 899.5h-836c-16.6 0-30 13.4-30 30s13.4 30 30 30h836c16.6 0 30-13.4 30-30s-13.4-30-30-30zM157.3 844.8c1 0 2.1 0 3.1-0.1l212.8-18.9c8.2-0.7 15.8-4.3 21.6-10.1l500.1-500.1c13.7-13.7 13.7-35.8 0-49.5L701 72.1c-6.6-6.6-15.5-10.3-24.8-10.3s-18.2 3.7-24.7 10.3L151.7 571.9l-0.4 0.4c-5.8 5.8-9.4 13.5-10.1 21.7l-18.8 212.8c-0.9 10.3 2.8 20.5 10.1 27.8 6.6 6.5 15.6 10.2 24.8 10.2z m519-698.5l144.4 144.5-83.5 83.5-144.5-144.5 83.6-83.5zM209.8 612.8l333.4-333.4 144.5 144.5-333.4 333.3-158.5 14.1 14-158.5z"
              p-id="904"
            ></path>
          </svg>
        </template>
      </mc-input>
      <mc-input v-model="value" prefix="￥" suffix="RMB" placeholder="props" />
    </div>
    <h2>不同大小</h2>
    <div class="item">
      <mc-input v-model="value" size="large" placeholder="large" />
      <mc-input v-model="value" placeholder="middle" />
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
