<template>
  <div class="box" @click="isCopied" v-clipboard:copy="css">
    <div :class="className">
      <!-- <slot></slot> -->
      <slot name="innerHtml"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box.vue',
  data() {
    return {
      css: this.rawCss
    }
  },
  // created() {
  //   console.log(this.rawCss)
  //   // console.log(this.className)
  // },
  props: {
    rawCss: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    isCopied() {
      this.$store.dispatch('messageHandler')
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
