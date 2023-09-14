<script setup lang="ts">
import { ref, watch } from 'vue'

const state = ref('mmcat')
watch(
  () => state.value,
  (newVal) => {
    console.log('state值：', newVal)
  }
)

</script>

<template>
  <div class="play-container">
    <h1>input组件：</h1>
    <div class="item">
      <mc-input v-model="state"/>
      state：{{ state }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

.play-container {
  display: flex;
  height: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
