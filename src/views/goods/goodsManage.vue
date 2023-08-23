<script setup>
import { ref } from 'vue'

const formModel = ref({
  name: '',
  region: '',
  num: 1,
  date1: '',
  date2: '',
  condition: '',
  desc: ''
})
const activeName = ref('first')

const submit = async () => {
  await form.value.validate()
  ElMessage.success('新增成功')
}

const cancel = () => {
  formModel.value = {
    name: '',
    category: '',
    num: 1,
    date1: '',
    date2: '',
    condition: '',
    desc: ''
  }
}
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
  date: [{ required: true, message: '请选择日期', trigger: 'change' }],
  condition: [{ required: true, message: '请选择商品类别', trigger: 'change' }]
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
              <el-option label="家电类" value="shanghai" />
              <el-option label="数码类" value="beijing" />
              <el-option label="服饰类" value="beijing" />
              <el-option label="医药类" value="beijing" />
              <el-option label="食品类" value="beijing" />
              <el-option label="图书类" value="beijing" />
            </el-select>
          </el-form-item>

          <el-form-item label="商品数量" prop="num">
            <el-input-number v-model="formModel.num" />
          </el-form-item>

          <el-form-item label="入库时间" prop="date">
            <el-col :span="12">
              <el-date-picker
                v-model="formModel.date1"
                type="date"
                placeholder="选择日期"
                style="width: 100%"
              />
            </el-col>
            <el-col :span="12">
              <el-time-picker
                v-model="formModel.date2"
                placeholder="选择时间"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>

          <el-form-item label="状态" prop="condition">
            <el-radio-group v-model="formModel.condition">
              <el-radio label="全新" />
              <el-radio label="二手" />
            </el-radio-group>
          </el-form-item>

          <el-form-item label="简要描述">
            <el-input v-model="formModel.desc" type="textarea" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submit">新增入库</el-button>
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
