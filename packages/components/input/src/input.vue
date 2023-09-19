<template>
  <div :class="[bem.b(), bem.m(size),bem.is('disabled',disabled)]">
    <div :class="bem.e('wrapper')">

      <!-- prefix -->
      <span :class="bem.e('prefix')" v-if="prefix || $slots.prefix">
        <span :class="bem.e('prefix-inner')">
          <slot name="prefix">
            <!-- {{ prefix }} 主要是提供直接传递props属性用法 -->
            {{ prefix }}
          </slot>
        </span>
      </span>

      <input
        ref="input"
        :class="bem.e('inner')"
        :type="password && !showPassword ? 'password' : 'text'"
        :disabled="disabled"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput($event)"
        @change="handleChange($event)"
        v-bind="$attrs"
      />
      <!-- v-bind="$attrs" 用来接收placeholder -->

      <!-- suffix -->
      <span :class="bem.e('suffix')" v-if="showSuffix">
        <span :class="bem.e('suffix-inner')">
          <slot name="suffix">{{ suffix }}</slot>
          <!-- 清空按钮 -->
          <span
            :class="bem.e('clear')"
            v-if="!disabled && allowClear && modelValue"
            @click="onClear"
          >
            <svg
              t="1694424291879"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1392"
            >
              <path
                d="M511.2 124.1c52.4 0 103.3 10.3 151.1 30.5 46.2 19.5 87.7 47.5 123.4 83.2s63.7 77.2 83.2 123.4c20.2 47.8 30.5 98.6 30.5 151.1s-10.3 103.3-30.5 151.1c-19.5 46.2-47.5 87.7-83.2 123.4s-77.2 63.7-123.4 83.2c-47.8 20.2-98.6 30.5-151.1 30.5S407.9 890.2 360.1 870c-46.2-19.5-87.7-47.5-123.4-83.2s-63.7-77.2-83.2-123.4c-20.2-47.8-30.5-98.6-30.5-151.1s10.3-103.3 30.5-151.1C173 315 201 273.5 236.7 237.8s77.2-63.7 123.4-83.2c47.8-20.2 98.7-30.5 151.1-30.5m0-60C263.7 64.1 63 264.8 63 512.3s200.6 448.1 448.1 448.1 448.1-200.6 448.1-448.1-200.5-448.2-448-448.2z"
                p-id="1393"
              ></path>
              <path
                d="M672.4 321c-7.7 0-15.4 2.9-21.2 8.8l-140 140-140-140c-5.9-5.9-13.5-8.8-21.2-8.8s-15.4 2.9-21.2 8.8c-11.7 11.7-11.7 30.7 0 42.4l140 140-140 140c-11.7 11.7-11.7 30.7 0 42.4 5.9 5.9 13.5 8.8 21.2 8.8 7.7 0 15.4-2.9 21.2-8.8l140-140 140 140c5.9 5.9 13.5 8.8 21.2 8.8s15.4-2.9 21.2-8.8c11.7-11.7 11.7-30.7 0-42.4l-140-140 140-140c11.7-11.7 11.7-30.7 0-42.4-5.8-5.8-13.5-8.8-21.2-8.8z"
                p-id="1394"
              ></path>
            </svg>
          </span>
          <!-- 密码眼 -->
          <span :class="bem.e('password')" v-if="password" @click="onPassword">
            <svg
              focusable="false"
              v-show="showPassword"
              class="u-eye"
              data-icon="eye"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              viewBox="64 64 896 896"
            >
              <path
                d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
              ></path>
            </svg>
            <svg
              focusable="false"
              v-show="!showPassword"
              class="u-eye"
              data-icon="eye-invisible"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              viewBox="64 64 896 896"
            >
              <path
                d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"
              ></path>
              <path
                d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"
              ></path>
            </svg>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  watch,
  useSlots,
} from "vue";
import { useNamespace } from "@mmcat-ui/hooks";
import { UPDATE_MODEL_EVENT } from "@mmcat-ui/constants";
import { inputEmits, inputProps } from "./input";

type TargetElement = HTMLInputElement | HTMLTextAreaElement;

defineOptions({
  name: "McInput",
});
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);

const input = shallowRef<HTMLInputElement>();

const isComposing = ref(false);

const _ref = computed(() => input.value);
// console.log('setup中直接获取input实例引用的value值：',input.value);

// 设置默认值 (computed在组件挂载后能立即监听到默认值的传递)
const nativeInputValue = computed(() => {
  return !props.modelValue ? "" : String(props.modelValue);
});

const slots = useSlots();

const showPassword = ref(false);

const showSuffix = computed(
  () => !!slots.suffix || props.suffix || props.allowClear || props.password
);

watch(
  () => props.modelValue,
  () => {
    // formItem?.validate?.('change')
    setNativeInputValue();
  }
);

const setNativeInputValue = () => {
  const inputRef = _ref.value;
  // console.log('onMounted后获取input实例引用的value值：',inputRef?.value);

  // input框中为默认值（没有键入新值，此时input为空）或者 框中值没改变则不做操作
  if (!inputRef || inputRef.value === nativeInputValue.value) return;

  // 初始默认值赋值
  inputRef.value = nativeInputValue.value;
};

const handleInput = async (event: Event) => {
  const { value } = event.target as TargetElement;
  if (isComposing.value) return;
  if (!("lazy" in props.modelModifiers)) {
    // 发射 v-model 的 update:modelValue 监听事件
    emit(UPDATE_MODEL_EVENT, value);
    // 等待 DOM 更新后设置 input 表单的值
    await nextTick();
    // 若没有nextTick()那么我们直接去setNativeInputValue函数中取到的inputRef?.value，即立即去取当前 DOM 中的input表单值是旧值，等待nextTick()后才能获取到 新DOM 的新值
    setNativeInputValue();
  }
};

const handleChange = async (event: Event) => {
  const { value } = event.target as TargetElement;
  if ("lazy" in props.modelModifiers) {
    emit(UPDATE_MODEL_EVENT, value);
    await nextTick();
    setNativeInputValue();
  }
};

const handleCompositionStart = (event: CompositionEvent) => {
  emit("compositionstart", event);
  isComposing.value = true;
};

const handleCompositionUpdate = (event: CompositionEvent) => {
  emit("compositionupdate", event);
};

const handleCompositionEnd = (event: CompositionEvent) => {
  emit("compositionend", event);
  if (isComposing.value) {
    isComposing.value = false;
    handleInput(event);
  }
};

const onClear = () => {
  emit(UPDATE_MODEL_EVENT, "");
  _ref?.value?.focus();
};

const onPassword = () => {
  showPassword.value = !showPassword.value;
};

onMounted(() => {
  // 我们要在组件渲染完成之后才进行初始化赋值，所以便需要使用 onMounted 函数进行初始化。
  setNativeInputValue();
});

const bem = useNamespace("input");
</script>
