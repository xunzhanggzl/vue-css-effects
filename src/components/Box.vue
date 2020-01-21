<template>
  <div class="box">
    <div :class="className">
      <!-- <slot></slot> -->
      <slot name="innerHtml"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box.vue',
  created() {
    // console.log(this.rawCss)
    // console.log(this.className)
  },
  props: {
    rawCss: {
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .box
    min-height 135px
    min-width 100%
    cursor pointer
    display flex
    align-items center
    justify-content center
    transition 0.2s
</style>
