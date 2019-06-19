<template>
  <ul class="tree" v-if="list.length">
    <li v-for="item of list" :key="item.id">
      <span v-if="item.children" @click="item.isSpread=!item.isSpread" :class="item.isSpread?'is-spread':''">+</span><a href="javascript:;">{{item.text}}</a>
      <Tree :list="item.children" v-show="item.isSpread"/>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'Tree',
    props: {
      list: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
ul
  padding-left: 20px
  li
    position relative
    a
      margin-left:28px
span 
  position absolute
  left 0
  top 12px
  width 16px
  height 16px
  line-height 16px
  text-align center
  border 1px solid #ddd
</style>