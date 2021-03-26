<template>
  <div class="home">
    <div>
      <span class="val">{{ count }}</span>
      <el-button @click="add">add</el-button>
      <el-button @click="add3">add3</el-button>
    </div>
    <div>
      <span class="val">{{ count2 }}</span>
      <el-button @click="add2">add2</el-button>
    </div>
    <HomeContent :msg="msg" @add="onAdd"></HomeContent>
  </div>
</template>

<script lang='ts'>
import { ref, defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'
import HomeContent from './HomeContent.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HomeContent,
  },
  props: {
    msg: {
      type: String,
    },
  },
  setup: (props, context) => {
    console.log(props, context)
    const store = useStore(key)
    const count = computed(() => store.state.count)

    const add = () => {
      store.commit('add')
    }

    const add3 = () => {
      store.dispatch('add')
    }

    const count2 = ref(2)
    const add2 = () => {
      count2.value++
    }

    const msg = ref('点我')

    function onAdd() {
      msg.value += '2'
    }

    return {
      count,
      count2,
      add,
      add2,
      add3,
      msg,
      onAdd,
    }
  },
})
</script>

<style lang="stylus">
// @import '../../src/assets/styles/vars.styl'

@keyframes rotate
  from
    transform rotate(0)

  to
    transform rotate(360deg)

.home
  padding 100px

  >div
    margin 10px

  .val
    display inline-block
    width 100px
    text-align center
    font-size $font-size-large-xx
    color $color-orange
    animation rotate 1s linear infinite
</style>
