<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="stylus">
  *
    box-sizing border-box
  html
    font-size 62.5%
    margin 0
    padding 0
  body
    background: #fcfdff
    color: #474E51
    // 这里是要加margin的，因为浏览器的默认margin会覆盖上面继承html的margin
    margin 0
    // padding-bottom为打印的消息留空间
    padding 0 0 6rem 0
    font-size 1.6rem
    position relative
    min-height 100%
</style>
