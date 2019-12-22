<template>
  <div class="wrapper">
    <div class="title">
      <a href="#">
        CSSeffectsSnippets
        <span>.</span>
      </a>
    </div>
    <div class="links">
      <a href="https://github.com/emilkowalski/css-animation-snippets" target="_blank">Github</a>
      <a
        href="https://github.com/emilkowalski/css-animation-snippets/issues/new"
        target="_blank"
      >Share your ideas!</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width 75%
    margin 0 auto
    display flex
    justify-content space-between
    align-items center
    padding 4rem 0

    @media screen and (max-width: 1000px)
      flex-direction column
      width 90%
      padding 2.5rem 0

  .title
    a
      display inline-block
      font-size 2.6rem
      color #474E51
      text-decoration none
      font-weight bold

      @media screen and (max-width: 1000px)
        margin-top 0
        margin-bottom 2.5rem

      span
        color #5878F3

  .links
    a
      display inline-block
      color #D8ECF6
      font-size 1.6rem
      border-radius 0.4rem
      background #5878F3
      width 16rem
      padding 1rem 0
      text-align center
      text-decoration none
      box-shadow 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08)
      font-weight 400

      @media screen and (max-width 1000px)
        display block

      &:hover
        background: lighten(#5878F3, 3)
        color: lighten(#D8ECF6, 3)

      &:last-of-type
        background #fff
        color #5878F3
        &:hover
          background darken(#fff, 3)
          color #5878F3

      &:not(:last-child)
        margin-right 5rem

        @media screen and (max-width: 1000px)
          margin-right 0

      &:not(:first-child)
        @media screen and (max-width: 1000px)
          margin-top 1.5rem
</style>
