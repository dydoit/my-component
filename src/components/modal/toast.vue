<template>
  <transition>
    <div class="mask" v-show="isShow">
      <div class="content">
        {{text}}
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'toast',
    data (){
      return {
        text: '我是默认文字',
        isShow: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(0,0,0,.4)
  .content
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    padding 6px 12px
    border-radius: 4px
    font-size 12px
    color #fff
    background #000
</style>