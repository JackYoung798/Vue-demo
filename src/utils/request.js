import axios from 'axios'
import { useUserStore } from './../stores/modules/user'
import { ElMessage } from 'element-plus'

const baseURL = 'http://localhost:3000/posts'

//axios实例
const instance = axios.create({
  baseURL,
  timeout: 10000
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    const useStore = useUserStore()
    if (useStore.token) {
      config.posts.data.id = useStore.token
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    if (response.post.code === 0) {
      return response
    }
    ElMessage.error(response.posts.message)
    return Promise.reject(response.data)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
export { baseURL }
