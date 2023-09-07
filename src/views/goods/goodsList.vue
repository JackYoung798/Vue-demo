<script setup>
import { ref } from 'vue'
import { goodsGetInfoService } from '@/api/goods'
// import { onMounted } from 'vue'
// onMounted(() => {
//   goodsStore.getGoods()
// })

const tableData = ref([])

const get = async () => {
  const res = await goodsGetInfoService()
  tableData.value = res.data.data
}
get()
</script>

<template>
  <page-container title="仓库列表">
    <el-table :data="tableData" height="75vh" border stripe style="width: 100%">
      <el-table-column prop="id" label="商品编号" width="85" />
      <el-table-column prop="name" label="商品名称" width="120" />
      <el-table-column prop="region" label="类别" width="120" />
      <el-table-column prop="num" label="数量" width="80" />
      <el-table-column prop="price" label="单价" width="80" />
      <el-table-column prop="date1" label="入库日期" width="160" />
      <el-table-column prop="date2" label="入库时间" width="160" />
      <el-table-column prop="condition" label="商品状态" width="100" />
      <el-table-column prop="desc" label="简要描述" />
    </el-table>
  </page-container>
</template>
