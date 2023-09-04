<script setup>
const tableData = [
  {
    id: '1',
    name: '沙发',
    region: '家具类',
    num: '18',
    price: '180',
    date1: '123',
    date2: '123',
    condition: '全新',
    desc: '咳咳咳'
  }
]
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
