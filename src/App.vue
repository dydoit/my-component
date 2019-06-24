<template>
  <div id="app">
    <nav>
      <h3>组件</h3>
      <ul>
        <router-link tag="li" to="/form">form</router-link>
        <router-link tag="li" to="/input">input系列</router-link>
        <router-link tag="li" to="/tree">树形菜单</router-link>
        <router-link tag="li" to="/modal">模态框</router-link>
      </ul>
    </nav>
    <router-view class="comp-view"></router-view>
  </div>
</template>
<style lang="stylus">
#app 
  width 80%
  margin 20px auto
  display flex
  justify-content space-between
nav 
  width 180px
  border 1px solid #ccc;
  text-align center
  h3
    padding 0 10px
    line-height 40px
    text-align left
li
  line-height 40px
  list-style none
  cursor pointer
.comp-view 
  flex 1
  margin-left 40px
</style>
