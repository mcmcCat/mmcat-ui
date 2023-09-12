<template>
  <!-- 设置动画名字，在style中设置对应类选择器，并设置动画 -->
  <transition name="message-fade">
    <!-- isShow控制显示隐藏（有了它才可触发动画） -->
    <!-- marginTop动态的计算，让message不间断地堆叠 -->
    <!-- styleClass给不同类型的message设置类名 -->
    <!-- {{message}} 展示传递过来的message-->
    <div
      v-show="isShow"
      :style="{ 'margin-top': marginTop + 'px', 'z-index': zIndex }"
      :class="styleClass"
    >
      <svg
        v-if="type === 'success'"
        :style="{fill: ColorStyle[type] }"
        t="1694424462755"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1537"
        width="20"
        height="20"
      >
        <path
          d="M511.2 124.1c52.4 0 103.3 10.3 151.1 30.5 46.2 19.5 87.7 47.5 123.4 83.2s63.7 77.2 83.2 123.4c20.2 47.8 30.5 98.6 30.5 151.1s-10.3 103.3-30.5 151.1c-19.5 46.2-47.5 87.7-83.2 123.4s-77.2 63.7-123.4 83.2c-47.8 20.2-98.6 30.5-151.1 30.5S407.9 890.2 360.1 870c-46.2-19.5-87.7-47.5-123.4-83.2s-63.7-77.2-83.2-123.4c-20.2-47.8-30.5-98.6-30.5-151.1s10.3-103.3 30.5-151.1C173 315 201 273.5 236.7 237.8s77.2-63.7 123.4-83.2c47.8-20.2 98.7-30.5 151.1-30.5m0-60C263.7 64.1 63 264.8 63 512.3s200.6 448.1 448.1 448.1 448.1-200.6 448.1-448.1-200.5-448.2-448-448.2z"
          p-id="1538"
        ></path>
        <path
          d="M737 337.2c-7.7 0-15.4 2.9-21.2 8.8l-269 269-140.2-140.2c-5.9-5.9-13.5-8.8-21.2-8.8-7.7 0-15.4 2.9-21.2 8.8-11.7 11.7-11.7 30.7 0 42.4l161.4 161.4c5.9 5.9 13.5 8.8 21.2 8.8 7.7 0 15.4-2.9 21.2-8.8l1-1 289.2-289.2c11.7-11.7 11.7-30.7 0-42.4-5.9-5.9-13.6-8.8-21.2-8.8z"
          p-id="1539"
        ></path>
      </svg>
      <svg
        v-if="type === 'warning'"
        :style="{ fill: ColorStyle[type] }"
        t="1694424519538"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1682"
        width="20"
        height="20"
      >
        <path
          d="M512.8 357.6c-16.6 0-40 12.3-40 27.4l10 245.1c0 15.2 13.4 27.4 30 27.4s30-12.3 30-27.4l10-245.1c0-15.2-23.5-27.4-40-27.4z"
          p-id="1683"
        ></path>
        <path
          d="M497.557695 765.262509a40 40 0 1 0 30.614675-73.910362 40 40 0 1 0-30.614675 73.910362Z"
          p-id="1684"
        ></path>
        <path
          d="M869.5 911.2h-713c-32.5 0-61.7-16.8-77.9-45-16.3-28.2-16.3-61.8 0-90l356.5-617.4c16.3-28.2 45.4-45 77.9-45 32.5 0 61.7 16.8 77.9 45l356.5 617.4c16.3 28.2 16.3 61.8 0 90s-45.4 45-77.9 45zM487 188.8L130.6 806.2c-7.8 13.5-2.6 25.5 0 30s10.3 15 26 15h712.9c15.6 0 23.4-10.5 26-15 2.6-4.5 7.8-16.5 0-30L539 188.8c-7.8-13.5-20.8-15-26-15s-18.2 1.4-26 15z"
          p-id="1685"
        ></path>
      </svg>
      <svg
        v-if="type === 'error'"
        :style="{ fill: ColorStyle[type] }"
        t="1694424291879"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1392"
        width="16"
        height="16"
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
      <span style="margin-left: 10px">{{ message }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "McMessage",
});

type MessageType = "success" | "warning" | "error";

interface messageProps {
  type: MessageType;
  message: string;
}

const props = withDefaults(defineProps<messageProps>(), {
  type: "success",
  message: "success~~~",
});

enum ColorStyle { // 颜色主题对象
  success = "#529b2e",
  warning = "#b88230",
  error = "#c45656",
}

// isShow控制显示隐藏
const isShow = ref(false);

// 定时器标识
let timer: any = null;

// margin-top响应式变量
const marginTop = ref(20);
// z-index响应式变量
const zIndex = ref(999);

// 类名变量，默认有message类，还有个动态的样式根据type来添加类名
const styleClass = ["message", props.type];

// 设置是否显示message元素（有v-show这样的切换显示才会触发动画）
function setIsShow(flag: boolean) {
  // 返回promise是因为需要把同步变异步，不能show完就hide
  return new Promise((resolve) => {
    isShow.value = flag;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      resolve("fade动画执行完成");
    }, 300);
  });
}

// 设置margin-top的方法
function setTop(newTop: number, newZIndex: number) {
  marginTop.value = newTop;
  zIndex.value = newZIndex;
}

// 暴露方法和属性到实例上（让index.ts中可以使用）
defineExpose({
  setIsShow,
  setTop,
  height: 30, // 信息框的高度
  consTop: 20, // 信息框的固定间距
  consZIndex: 999, // 最低层级
});
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 99999;
  padding: 0 20px;
  height: 35px;
  font-size: 12px;
  border-radius: 3px;
  text-align: center;
  // pointer-events: none; // 保证整个message区域不遮挡背后元素响应鼠标事件
  // 此处的过渡动画主要用在上边的message消失后上顶的动作
  transition: all 0.3s ease-out;
  transform: translateX(-50%);
  line-height: 35px;
 
  &.success {
    border: 1px solid #d1edc4;
    color: #529b2e;
    background-color: #e1f3d8;
  }

  &.warning {
    border: 1px solid #f8e3c5;
    color: #b88230;
    background-color: #faecd8;
  }

  &.error {
    border: 1px solid #fcd3d3;
    color: #c45656;
    background-color: #fde2e2;
  }
}

.message-fade-enter-active {
  transition: all 0.3s ease-in;
}

.message-fade-leave-active {
  transition: all 0.3s ease-out;
}

.message-fade-enter-from,
.message-fade-leave-to {
  top: -30px;
  opacity: 0;
}
</style>
