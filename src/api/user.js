import request from '@/utils/request'

// 注册接口
export const userRegisterService = ({ username, password }) =>
  request.post('/user/register', { username, password })

// 登录接口
export const userLoginService = ({ username, password }) =>
  request.post('/user/login', { username, password })

// 获取用户基本信息
export const userGetInfoService = () => request.get('/user/userinfo')

// 更新用户基本信息
export const userUpdateInfoService = ({ username, nickname, email }) =>
  request.put('/user/userinfo', { username, nickname, email })

// 更新用户头像
export const userUpdateAvatarService = (avatar) =>
  request.patch('/my/update/avatar', { avatar })

// 更新用户密码
export const userUpdatePasswordService = ({ old_pwd, new_pwd, re_pwd }) =>
  request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
