import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import '@/assets/styles/index.styl'
import setupElementPlus from '@/plugins/element-plus'
import axios from './plugins/axios'
import gdskit from 'gds-kit'

console.log(gdskit);

const app = createApp(App)
app.use(router)
app.use(store, key)
app.mount('#app')
app.use(axios)

setupElementPlus(app)

window.a = 'a';
console.log(import.meta.env)

class Con {
  private price: any
}

interface Config {
  width?: number
  height: number
}

interface phoneConfig extends Config, Con {
  tall: number
}

function setA(config: phoneConfig) {}

// const a: phoneConfig  = { tall: 100, price: 'red', width: 100, height: 200 }
// setA(a)

// const ab = { color: 'red', width: 100, height: 200 ,tall: 10};
// setA(ab)

class Person {
  private name: String
  protected age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class man extends Person {
  say() {
    // console.log(this.name);
    console.log(this.age)
  }
}

enum aa {
  UP,
  DOWN,
  LEFT,
  RIGHt = 2,
}

console.log(aa.UP)
console.log(aa.DOWN)
console.log(aa.LEFT)
console.log(aa.RIGHt)
