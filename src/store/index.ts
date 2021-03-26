import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 5,
    }
  },
  mutations: {
    add(state) {
      state.count++
      console.log(state.count)
    },
  },
  actions: {
    add(context) {
      setTimeout(() => {
        context.commit('add')
      }, 500)
    },
  },
})

