<template>
  <div class="dy-form">
    <slot></slot>  
  </div>
</template>

<script>
  export default {
    name: 'DyForm',
    props: {
      rules: [Object, Array],
      model: Object
    },
    provide() {
      return {
        form: this
      }
    },
    created () {
      this.fields = []
      this.$on("formItemAdd", item => this.fields.push(item))
    },
    methods: {
      async validate(callback) {
        
        const tasks = this.fields.map(item => item.validate())
        debugger
        const results = await Promise.all(tasks)
        let ret = true
        results.forEach(valid => {
          if (!valid) {
            ret = false
          }
        })
        callback(ret)
      }
    }
  }
</script>

<style lang="stylus" scoped>


</style>