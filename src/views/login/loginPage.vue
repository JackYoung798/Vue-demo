<script setup>
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'

const status = ref(true)
const formModel = ref({
  username: '',
  password: '',
  repassword: ''
})
</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <el-form size="large" autocomplete="off" label-width="120px" v-if="status">
        <el-form-item>
          <h2 class="title">登录</h2>
        </el-form-item>
        <el-form-item label="账户">
          <el-input :prefix-icon="User" v-model="formModel.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            :prefix-icon="Lock"
            v-model="formModel.password"
            type="password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" auto-insert-space>登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-link type="info" class="flex" :underline="false" @click="status = false">注册 →</el-link>
        </el-form-item>
      </el-form>

      <el-form size="large" label-width="120px" autocomplete="off" v-else>
        <el-form-item>
          <h2 class="title">注册</h2>
        </el-form-item>
        <el-form-item label="账户">
          <el-input :prefix-icon="User" v-model="formModel.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            :prefix-icon="Lock"
            v-model="formModel.password"
            type="password"
            show-password
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            :prefix-icon="Lock"
            v-model="formModel.repassword"
            type="repassword"
            show-password
            placeholder="请确认输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" auto-insert-space>注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-link type="info" class="flex" :underline="false" @click="status = true">← 登录</el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style>
.login-page {
  height: 100vh;
  background-color: #fff;
}
.bg {
  background-color: rgb(88, 86, 140);
  border-radius: 0 20px 20px 0;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  margin: 0 auto;
}
.btn {
  width: 100%;
}
.flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
