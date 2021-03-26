<template>
  <router-link class="link" to="/">count</router-link>
  <router-link class="link" to="/hello">hello</router-link>
  <router-view></router-view>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
  margin-top 60px

.link
  text-decoration underline
  margin 10px 20px
</style>