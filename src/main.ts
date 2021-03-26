import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import '@/assets/styles/index.styl'
import setupElementPlus from '@/plugins/element-plus'
import axios from './plugins/axios'
import gdskit from 'gds-kit'

console.log(gdskit)

const app = createApp(App)
app.use(router)
app.use(store, key)
app.mount('#app')
app.use(axios)

setupElementPlus(app)

console.log(import.meta.env)
console.log(import.meta.env)
