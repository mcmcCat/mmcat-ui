<template>
  <button
    ref="_ref"
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('disabled', disabled),
      bem.is('plain', plain),
      bem.is('round', round),
      bem.is('circle', circle),
    ]"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <mc-icon v-if="icon || $slots.icon">
      <!-- 通过props的icon属性实现 -->
      <component :is="icon" v-if="icon"/>
      <!-- 通过插槽实现 -->
      <slot v-else name="icon" />
    </mc-icon>
    <slot />
  </button>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useNamespace } from "@mmcat-ui/hooks";
import { buttonEmits, buttonProps} from "./button";
// 定义组件名称
defineOptions({
  name: "McButton",
});
// 定义 Props
defineProps(buttonProps);
// 定义 emit
const emit = defineEmits(buttonEmits);
// className 的 BEM 命名
const bem = useNamespace("button");
// 按钮 html 元素
const _ref = ref<HTMLButtonElement>();
// 点击事件函数
const handleClick = (evt: MouseEvent) => {
  emit("click", evt);
};

// 组件暴露自己的属性以及方法，去供外部使用
defineExpose({
  ref: _ref,
});
</script>
