<script setup>
import { ref } from 'vue'
import { goodsInboundservice } from '@/api/goods.js'
import { useUserStore } from '@/stores'
const userStore = useUserStore()
const formModel = ref({
  name: '',
  region: '',
  num: 1,
  price: 0,
  // date: '',
  zt: '',
  text: '',
  username: userStore.user.username
})
const activeName = ref('first')

const form = ref() //配置校验规则
const rules = {
  name: [{ required: true, message: '请输入商品名称', trigger: 'change' }],
  category: [{ required: true, message: '请选择商品类别', trigger: 'change' }],
  num: [
    {
      required: true,
      pattern: /^[1-9]\d*$/,
      message: '请正确输入商品数量',
      trigger: 'change'
    }
  ],
  price: [
    {
      required: true,
      pattern: /^[0-9]\d*$/,
      message: '请正确输入商品单价',
      trigger: 'change'
    }
  ],
  // date: [{ required: true, message: '请选择日期', trigger: 'change' }],
  zt: [{ required: true, message: '请选择商品类别', trigger: 'change' }]
}

//入库操作
const inbound = async () => {
  await form.value.validate()
  await goodsInboundservice(formModel.value)
  ElMessage.success('新增成功')
}
//取消操作
const cancel = () => {
  formModel.value = {
    name: '',
    category: '',
    num: 1,
    // date: '',
    zt: '',
    text: ''
  }
}
</script>

<template>
  <page-container title="仓库管理">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="入库操作" name="first">
        <el-form
          :rules="rules"
          ref="form"
          class="form"
          :model="formModel"
          label-width="120px"
        >
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="formModel.name" />
          </el-form-item>

          <el-form-item label="商品类别" prop="category">
            <el-select
              v-model="formModel.category"
              placeholder="请选择商品类别"
            >
              <el-option label="家电类" value="家电类" />
              <el-option label="数码类" value="数码类" />
              <el-option label="服饰类" value="服饰类" />
              <el-option label="医药类" value="医药类" />
              <el-option label="食品类" value="食品类" />
              <el-option label="图书类" value="图书类" />
              <el-option label="其他" value="其他" />
            </el-select>
          </el-form-item>

          <el-form-item label="商品数量" prop="num">
            <el-input-number v-model="formModel.num" />
          </el-form-item>

          <el-form-item label="商品单价" prop="price">
            <el-input-number v-model="formModel.price" />
          </el-form-item>

          <!-- <el-form-item label="入库日期" prop="date">
            <el-date-picker
              v-model="formModel.date"
              type="date"
              placeholder="选择日期"
              style="width: 50%"
            />
          </el-form-item> -->

          <el-form-item label="状态" prop="zt">
            <el-radio-group v-model="formModel.zt">
              <el-radio label="全新" />
              <el-radio label="二手" />
            </el-radio-group>
          </el-form-item>

          <el-form-item label="简要描述" prop="text">
            <el-input v-model="formModel.text" type="textarea" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="inbound">新增入库</el-button>
            <el-button @click="cancel">取消操作</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="出库操作" name="second">还没写</el-tab-pane>
    </el-tabs>
  </page-container>
</template>

<style>
.form {
  width: 600px;
}
</style>
