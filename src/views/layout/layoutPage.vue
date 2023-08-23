<script setup>
import {
  Management,
  UserFilled,
  EditPen,
  SwitchButton,
  CaretBottom,
  List,
  Avatar,
  TrendCharts
} from '@element-plus/icons-vue'
import avatar from '@/assets/default.png'
import { useUserStore } from '@/stores'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()

//获取用户数据
onMounted(() => {
  userStore.getUser()
})

const handleCommand = async (key) => {
  if (key === 'logout') {
    // 退出操作
    await ElMessageBox.confirm('你确认要进行退出么', '温馨提示', {
      type: 'warning',
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    })

    // 清除本地的数据 (token + user信息)
    userStore.removeToken()
    userStore.setUser({})
    router.push('/login')
  } else {
    // 跳转操作
    router.push(`/user/${key}`)
  }
}
</script>

<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <div class="logo"></div>
      <el-menu
        class="menu"
        active-text-color="#ffd04b"
        background-color="#232323"
        :default-active="$route.path"
        text-color="#fff"
        router
      >
        <el-menu-item index="/goods/details">
          <el-icon><TrendCharts /></el-icon>
          <span>仓库详情</span>
        </el-menu-item>
        <el-menu-item index="/goods/goodsList">
          <el-icon><List /></el-icon>
          <span>仓库列表</span>
        </el-menu-item>
        <el-menu-item index="/goods/goodsManage">
          <el-icon><Management /></el-icon>
          <span>仓库管理</span>
        </el-menu-item>

        <el-sub-menu index="/user">
          <!-- 多级菜单的标题 - 具名插槽 title -->
          <template #title>
            <el-icon><UserFilled /></el-icon>
            <span>个人中心</span>
          </template>
          <!-- 展开的内容 - 默认插槽 -->
          <el-menu-item index="/user/userMessage">
            <el-icon><UserFilled /></el-icon>
            <span>基本资料</span>
          </el-menu-item>
          <el-menu-item index="/user/reAvatar">
            <el-icon><Avatar /></el-icon>
            <span>更换头像</span>
          </el-menu-item>
          <el-menu-item index="/user/rePassword">
            <el-icon><EditPen /></el-icon>
            <span>重置密码</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div>
          仓库管理员：<strong>{{
            userStore.user.nickname || userStore.user.username
          }}</strong>
        </div>
        <el-dropdown placement="bottom-end" @command="handleCommand">
          <!-- 展示给用户，默认看到的 -->
          <span class="el-dropdown__box">
            <el-avatar :src="userStore.user.user_pic || avatar" />
            <el-icon><CaretBottom /></el-icon>
          </span>

          <!-- 折叠的下拉部分 -->
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="userMessage" :icon="UserFilled"
                >基本资料</el-dropdown-item
              >
              <el-dropdown-item command="reAvatar" :icon="Avatar"
                >更换头像</el-dropdown-item
              >
              <el-dropdown-item command="rePassword" :icon="EditPen"
                >重置密码</el-dropdown-item
              >
              <el-dropdown-item command="logout" :icon="SwitchButton"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- <el-footer>仓库管理系统 ©2023 Created by YOUNG</el-footer> -->
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container {
  height: 100vh;
  .el-aside {
    background-color: #232323;
    .logo {
      height: 80px;
      background: url('@/assets/logo.png') no-repeat center / 200px auto;
    }
    .menu {
      border-right: none;
    }
  }

  .el-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-dropdown__box {
      display: flex;
      align-items: center;
      .el-icon {
        color: #999;
        margin-left: 10px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }
  .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
}
</style>
