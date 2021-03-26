<template>
  <div>
    <img :src="img" alt="" />
  </div>
  <div>{{ msg }}</div>
  <div class="msg">{{ msg2 }}</div>
</template>

<script lang='ts'>
import { ref, defineComponent, onMounted } from 'vue'
import img from '@/assets/images/radar_item_flow.png'

export default defineComponent({
  name: 'Test',
  data() {
    return {
      msg: '测试',
      img,
    }
  },
  setup: () => {
    const msg2 = ref('test1')

    onMounted(() => {
      console.log(2)
      setInterval(() => {
        msg2.value = 'test2'
      }, 3000)
    })

    return {
      msg2,
    }
  },
})
</script>

<style lang="less">
.msg {
  color: @base-color
}
</style>
