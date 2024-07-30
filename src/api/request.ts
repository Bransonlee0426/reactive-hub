import axios, { AxiosInstance } from 'axios';
// import { Session } from '/@/utils/storage';
import qs from 'qs';

// 配置新建一个 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' },
  paramsSerializer: {
    serialize(params) {
      return qs.stringify(params, { allowDots: true });
    },
  },
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么 token
    // if (Session.get('token')) {
    // 	config.headers!['sso_token'] = `${Session.get('token')}`;
    // 	config.headers!['ADMIN_ID'] = `${Session.get('userInfo')['ADMIN_ID']}`;
    // }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.log('request error:', error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const res = response.data;
    // `token` 过期或者账号已在别处登录
    const unauthorizedMessages = ['您没有访问权限！', '您还没有登录！'];
    if (unauthorizedMessages.includes(res.msg)) {
      // Session.clear(); // 清除浏览器全部临时缓存
      // ElMessageBox.alert(`${res.msg}你已被登出，请重新登录`, '提示', {})
      // 	.then(() => {
      // 		window.location.href = '/'; // 去登录页
      // 	})
      // 	.catch(() => {});
    }
    //原模版的判断，目前没用到只保留逻辑
    if (res.code && res.code !== 0) {
      if (res.code === 401 || res.code === 4001) {
        // Session.clear(); // 清除浏览器全部临时缓存
        // window.location.href = '/'; // 去登录页
        // ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
        // 	.then(() => {})
        // 	.catch(() => {});
      }
      // return Promise.reject(service.interceptors.response);
      return res;
    } else {
      // 请求成功 談窗
      if (res.msg) {
        // ElMessage.success(res.msg);
      }
      return res;
    }
  },
  (error) => {
    // 对响应错误做点什么
    if (error.message.indexOf('timeout') != -1) {
      console.log('timeout error:');
    } else if (error.message == 'Network Error') {
      console.log('Network Error:');
    } else {
      console.log('response error:', error.response);
    }
    return Promise.reject(error);
  }
);

// 导出 axios 实例
export default service;
