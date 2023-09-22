<template>
  <div v-loading="showLoading" element-loading-text="数据加载中...">
    <p>
      当前显示：{{ `${rowCount}行${customColCount + 2}列` }}， 显示/隐藏 table：
      <el-switch :model-value="showTable" @click="switchTableShow"></el-switch>
    </p>

    <el-table
      v-if="showTable"
      :data="tableData"
      style="width: 100%; height: 500px; overflow: scroll"
    >
      <el-table-column prop="info" label="信息" width="80" fixed />
      <el-table-column prop="status" label="状态" width="80" fixed>
        <template #default="scope">
          <el-switch v-model="scope.row.status" @change="statusChange" />
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in customColumns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
      >
        <template #default="scope">
          <el-tooltip
            placement="top-start"
            :disabled="!(item.prop === 'column1' && scope.row[item.prop])"
          >
            <template #content>
              <span>{{ "tooltip显示" + scope.row[item.prop] }}</span>
            </template>
            
            <span>{{ scope.row[item.prop] }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { ElMessage } from "element-plus";

const showLoading = ref(false);
const showTable = ref(false);
const tableData: any = ref([]);
const customColumns: any = ref([]);

const customColCount = 178; // 自定义列数
const rowCount = 20; // 行数

onBeforeMount(() => {
  // 初始化自定义列数据
  let temp = [] as any;
  for (let i = 0; i < customColCount; i++) {
    temp.push({ prop: `column${i + 1}`, label: `第${i + 1}列` });
  }
  customColumns.value = temp;

  // 初始化表格数据
  let dataTemp = [] as any;
  for (let i = 0; i < rowCount; i++) {
    let row: any = { info: `第${i + 1}行`, status: true };
    i === 0 && (row.status = false);
    for (let j = 0; j < customColCount + 2; j++) {
      row[`column${j + 1}`] = `第${i + 1}行${j + 1}列`;
      // info: "第1行"
      // status: true
      // column1: "第1行1列",
      // column2: "第1行2列",...
    }
    dataTemp.push(row);
  }
  tableData.value = dataTemp;
});

const switchTableShow = () => {
  // 先展示 loading
  showLoading.value = true;

  // 200ms 后再修改 table 是否显示，防止和 loading 合并到一个渲染周期，导致 loading 不显示
  setTimeout(() => {
    let startTime = +new Date();//加号 “+” 作为一元操作符，将这个 Date 对象转换为其对应的时间戳。
    showTable.value = !showTable.value; // 修改 table 显示，会形成 script 阻塞，因为绑定着v-if，涉及大量的渲染表格数据
    showLoading.value = false; // 这里的 loading 关闭，会在 table 阻塞完成后渲染关闭 dom
    // 创建一个宏任务，等上面阻塞的微任务执行完成后，再显示计算耗时
    // 如果没有创建这个宏任务，渲染耗时的计算可能会在表格切换之前执行，导致不准确的计时结果
    setTimeout(() => {
      let endTime = +new Date();
      ElMessage.success(`渲染耗时：${(endTime - startTime) / 1000}s`);
    }, 0);
  }, 200);
};

const statusChange = () => {
  let startTime = +new Date();
  // 加延时模拟业务逻辑：请求接口设置开关状态，成功后请求列表接口刷新数据
  setTimeout(() => {
    console.log('after setTimeout300');
    
    // 拿到了"新的"列表接口数据，进行列表更新,由于数据量大这时就会形成明显的 script阻塞，阻塞了下一个宏任务即下面这个setTimeout
    tableData.value = JSON.parse(JSON.stringify(tableData.value));
    console.log('after =');

    setTimeout(() => {
      console.log('after setTimeout0');
      
      let endTime = +new Date();
      ElMessage.success(`渲染耗时：${(endTime - startTime) / 1000}s`);
    }, 0);
  }, 300);
  console.log('behind setTimeout300' );
  
};
</script>

<style lang="scss" scoped></style>
