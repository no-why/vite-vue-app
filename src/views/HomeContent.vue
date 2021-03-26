<template>
  <div style="height: 100px; margin:10px">
    <el-button @click="emitEvent">
      <span class="el-msg">{{ msg }}</span>
    </el-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeContent',
  props: {
    msg: {
      type: String,
    },
  },
  setup: (props, context) => {
    function emitEvent() {
      context.emit('add')
    }

    return {
      emitEvent,
    }
  },
})
</script>

<style lang="scss">
.el-msg {
  color: $highlight-color;
}
</style>
