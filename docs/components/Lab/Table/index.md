# Table 性能优化

针对 element-plus 的 table 组件的性能优化，减少 **80%** 渲染耗时

## 场景

自定义列全部勾选的场景下（20 行 x 180 列），列表中的开关切换，预期为 **400-500 毫秒**，然而由于数据量大的原因，总体渲染时间竟然达到了 **7-8 秒**！这对用户的体验无疑是致命的！[优化的可行性分析](https://cn.vuejs.org/guide/best-practices/performance.html#reduce-reactivity-overhead-for-large-immutable-structures)

<script setup lang="ts">
import LocalEditTableFrame from '../../../../play-table/src/views/LocalEditTableFrame.vue'
import TableFrame from '../../../../play-table/src/views/TableFrame.vue'
</script>

## TableFrame - 原生

首先我们先来看看原生的 element-plus 提供的 el-table 组件的具体性能表现

<div class="example">
  <TableFrame/>
</div>

:::tip test

平均渲染时间在 `7.3s` 左右

:::

## LocalEditTableFrame - 优化

再来看看我们修改了其源码后的 el-table 组件的具体性能表现

<div class="example">
  <LocalEditTableFrame/>
</div>

:::tip test

平均渲染时间在 `1.5s` 左右

:::

<style scoped>
  .example {
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    padding:20px;
  }
</style>

## 具体实现

详情见[源码仓库](https://github.com/mcmcCat/mmcat-ui/tree/master/play-table)
