<template>
  <div class="home">
    <h3>Click on the animation to copy.</h3>
    <div class="selectBox">
      <select v-model="filtered" @change="updateVisibleBoxes">
        <option value="all" selected disabled>Filter results</option>
        <option value="all">All effects</option>
        <option value="animation">Animations</option>
        <option value="text">Text</option>
        <option value="button">Buttons</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      filtered: 'all'
    }
  },
  methods: {
    updateVisibleBoxes() {
      console.log(1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  h3
    text-align center
    font-size 2rem
    margin-bottom 4rem
    margin-top 0

  select
    border 1px solid #dae0e7
    color #474e51
    background transparent
    // 这里的字体没有设置rem，好为下面的伪元素设置位置
    font-size 18px
    padding 7px 15px
    width 100%
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)
    outline 0
    -webkit-appearance none;

  .selectBox
    position relative
    width 200px
    margin 0 auto 40px auto

    @media screen and (max-width: 1000px)
      width 160px

    &::after
      content ""
      position absolute
      top 48%
      right 16px
      height 6px
      width 10px
      background: url("../assets/images/down-arrow.svg") no-repeat;
</style>
