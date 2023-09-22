<template>
  <div class="v-scroll" @scroll="doScroll" ref="scrollBox">
    <div :style="blankStyle" style="height: 100%">
      <div v-for="item in tempSanxins" :key="item.id" class="scroll-item">
        <span>{{ item.msg }}</span>
        <img :src="item.src" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { throttle } from "lodash";

// #region 模拟请求数据相关

// 所有数据
const allSanxins = ref([]);

getAllSanxin(30); // 在这请求相当于在vue2的created钩子里请求

// 模拟请求后台数据的方法。
// 不一定要一次性请求3万条数据，也可以是分批次请求很多次，将数据保存在一个数组中。
function getAllSanxin(count) {
  // 模拟获取数据
  const length = allSanxins.value.length;
  for (let i = 0; i < count; i++) {
    allSanxins.value.push({
      id: `id: ${length + i}`,
      msg: `我是嘉心糖${length + i}号`,
      src: "https://freenaturestock.com/wp-content/uploads/freenaturestock-2053-768x1152.jpg",
    });
  }
}

// #endregion

// #region 滚动盒子容器相关

// 滚动盒子的ref
const scrollBox = ref(null);

// 可视区域的高度
const boxHeight = ref(0);

// 获取可视区域的高度
function getScrollBoxHeight() {
  boxHeight.value = scrollBox.value.clientHeight;
}

onMounted(() => {
  // 在mounted时获取可视区域的高度
  getScrollBoxHeight();
  // 监听屏幕变化以及旋转，都要重新获取可视区域的高度
  window.onresize = getScrollBoxHeight;
  window.onorientationchange = getScrollBoxHeight;
})

// #endregion

// #region 核心

// 列表每一项的高度
const itemHiehgt = ref(150);
// 可视区域可展示多少个列表项？ 计算公式：~~(可视化区域高度 / 列表项高度) + 2
// ~~是向下取整的运算符，等同于Math.floor()，为什么要 +2 ，是因为可能最上面和最下面的元素都只展示一部分
const itemNum = computed(() => {
  return ~~(boxHeight.value / itemHiehgt.value) + 2;
});

// 元素开始索引（这个很重要，很多计算属性都是根据它来计算的，可以说它是很多计算属性的因变量。）
// 可以理解为在可视区域第一项元素的索引
const startIndex = ref(0);

// 监听可视区域的滚动事件
// 公式：~~(滚动的距离 / 列表项 )，就能算出已经滚过了多少个列表项，也就能知道现在的startIndex是多少
// 例如我滚动条滚过了160px，那么index就是1，因为此时第一个列表项已经被滚上去了，可视区域里的第一项的索引是1
const doScroll = throttle(function () {
  const index = ~~(scrollBox.value.scrollTop / itemHiehgt.value);
  if (index === startIndex.value) return;
  startIndex.value = index;

  // 假设后端没有一次性返回3万条数据，我们的数据是累加到3万条的。第一项加上可视区所有项若超过了总数据数则请求新数据
  if (startIndex.value + itemNum.value > allSanxins.value.length - 1) {
    getAllSanxin(30);
  }
}, 200);

// 基于startIndex计算。要考虑不能超过总数据的最大索引
const endIndex = computed(() => {
  // 为了防止滑动过快白屏
  let index = startIndex.value + itemNum.value * 2;
  if (!allSanxins.value[index]) {
    index = allSanxins.value.length - 1;
  }
  return index;
});

// 真正渲染在屏幕上的数组。
// 以startIndex为准，截取startIndex前itemNum条数据，startIndex后itemNum*2条数据。
// 要考虑startIndex前itemNum条数据可能不存在的情况
const tempSanxins = computed(() => {
  // 可视区域展示的截取数据，使用了数组的slice方法，不改变原数组又能截取
  let index = 0;
  if (startIndex.value <= itemNum.value) {
    index = 0;
  } else {
    index = startIndex.value - itemNum.value;
  }
  return allSanxins.value.slice(index, endIndex.value + 1);
});

// 用padding来占位为渲染出来的数据，让滚动条看起来更真实
const blankStyle = computed(() => {
  // 上下方的空白处使用padding来充当
  let index = 0;
  if (startIndex.value <= itemNum.value) {
    index = 0;
  } else {
    index = startIndex.value - itemNum.value;
  }
  return {
    // 上方空白的高度计算公式：(开始index * 列表项高度)
    // 比如你滚过了3个列表项，那么上方空白区高度就是3 * 150 = 450，这样才能假装10000个数据的滚动状态
    paddingTop: index * itemHiehgt.value + "px",
    // 下方空白的高度计算公式：(总数据的个数 - 结束index - 1) * 列表项高度
    // 例如现在结束index是100，那么下方空白高度就是：(10000 - 100 - 1) * 150 = 1,484,850
    paddingBottom:
      (allSanxins.value.length - endIndex.value - 1) * itemHiehgt.value + "px",
    // 不要忘了加px哦
  };
});

// #endregion
</script>

<style lang="scss" scoped>
.v-scroll {
  height: 100vh;
  // padding-bottom: 500px;
  overflow: auto;

  .scroll-item {
    height: 148px;
    /* width: 100%; */
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    img {
      height: 100%;
    }
  }
}
</style>
