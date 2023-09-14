<template>
  <div :class="bem.b()">
    <input
      ref="input"
      :type="type"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  watch,
} from "vue";
import { useNamespace } from "@mmcat-ui/hooks";
import { UPDATE_MODEL_EVENT } from "@mmcat-ui/constants";
import { inputEmits, inputProps } from "./input";
import { log } from "console";

type TargetElement = HTMLInputElement | HTMLTextAreaElement

defineOptions({
  name: "McInput",
});
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);

const input = shallowRef<HTMLInputElement>();

const isComposing = ref(false)

const _ref = computed(() => input.value);
console.log('setup中直接获取input实例引用的value值：',input.value);

// 设置默认值 (computed在组件挂载后能立即监听到默认值的传递)
const nativeInputValue = computed(() => {
  return !props.modelValue ? "" : String(props.modelValue)
}
  
);
watch(
  () => props.modelValue,
  () => {
    // formItem?.validate?.('change')
    console.log('watch');
    
    setNativeInputValue();
  }
);

const setNativeInputValue = () => {
  const inputRef = _ref.value;
  console.log('onMounted后获取input实例引用的value值：',inputRef?.value);
  
  // input框中为默认值（没有键入新值，此时input为空）或者 框中值没改变则不做操作
  if (!inputRef || inputRef.value === nativeInputValue.value) return;
  
  // 初始默认值赋值
  inputRef.value = nativeInputValue.value;
};

const handleInput = async (event: Event) => {
  console.log('input事件触发');
  
  const { value } = event.target as TargetElement;
  // 发射 v-model 的 update:modelValue 监听事件
  if (isComposing.value) return
  emit(UPDATE_MODEL_EVENT, value);
  
  // 等待 DOM 更新后设置 input 表单的值 
  await nextTick();
  // 若没有nextTick()那么我们直接去setNativeInputValue函数中取到的inputRef?.value，即立即去取当前 DOM 中的input表单值是旧值，等待nextTick()后才能获取到 新DOM 的新值
  setNativeInputValue();
};

const handleCompositionStart = (event: CompositionEvent) => {
  emit('compositionstart', event)
  isComposing.value = true
}

const handleCompositionUpdate = (event: CompositionEvent) => {
  emit('compositionupdate', event)
}

const handleCompositionEnd = (event: CompositionEvent) => {
  emit('compositionend', event)
  if (isComposing.value) {
    isComposing.value = false
    handleInput(event)
  }
}

onMounted(() => {
  // 我们要在组件渲染完成之后才进行初始化赋值，所以便需要使用 onMounted 函数进行初始化。
  setNativeInputValue();
});

const bem = useNamespace("input");
</script>
