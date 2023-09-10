<script setup>
import { ref } from 'vue'
import { goodsGetInfoService } from '@/api/goods'
import { Delete, Edit } from '@element-plus/icons-vue'

const tableData = ref([])
const get = async () => {
  const res = await goodsGetInfoService()
  tableData.value = res.data
}
get()
</script>

<template>
  <page-container title="仓库列表">
    <el-table :data="tableData" height="75vh" border stripe style="width: 100%">
      <el-table-column prop="goodsid" label="编号" width="60" />
      <el-table-column prop="name" label="商品名称" width="100" />
      <el-table-column prop="category" label="类别" width="80" />
      <el-table-column prop="num" label="数量" width="80" />
      <el-table-column prop="price" label="单价" width="80" />
      <el-table-column prop="date" label="入库时间" width="180" />
      <el-table-column prop="zt" label="状态" width="60" />
      <el-table-column prop="text" label="简要描述" width="300" />
      <el-table-column label="操作">
        <template #default>
          <el-button type="primary"
            ><el-icon><Edit /></el-icon>编辑</el-button
          >
          <el-button type="danger"
            ><el-icon><Delete /></el-icon>删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </page-container>
</template>
