import { Plugin, App } from 'vue'
import axios from 'axios'

const config = {
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  (cfg: any) => {
    // Do something before request is sent
    return cfg
  },
  (err: any) => {
    // Do something with request error
    return Promise.reject(err)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  (res: any) => {
    // Do something with response data
    return res
  },
  (err: any) => {
    // Do something with response error
    return Promise.reject(err)
  }
)

const plugin: Plugin = {
  install: (app: App) => {
    console.log(app);
    Object.defineProperty(app, '_axios', _axios);
  },
}

export default plugin
