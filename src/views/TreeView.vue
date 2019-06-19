<template>
  <div class="tree">
    <Tree :list="navs"/>
  </div>
</template>

<script>
  import Tree from '@/components/tree/tree.vue'
  export default {
    name: 'TreeView',
    data () {
      return {
        navs: [
          {
            id: '001',
            text: '河北省',
            isSpread: false,
            children: [
              {
                id: '0010',
                text: '石家庄市'
              },
              {
                id: '0011',
                text: '保定市'
              }
            ]
          },
          {
            id: '002',
            text: '湖南省',
            isSpread: false,
            children: [
              {
                id: '0020',
                text: '长沙市'
              },
              {
                id: '0021',
                text: '衡阳市',
                isSpread: false,
                children: [
                  {
                    id: '00210',
                    text: '耒阳市'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    components: {
      Tree
    }
  }
</script>

<style lang="scss" scoped>

</style>