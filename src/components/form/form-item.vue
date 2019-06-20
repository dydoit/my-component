<template>
  <div class="dy-form-item">
    <label for="">{{label}}</label>
    <slot></slot>
    <p v-if="errMsg" style="color:red">{{errMsg}}</p>
  </div>
</template>

<script>
  import Schema from 'async-validator'
  export default {
    name: 'DyFormItem',
    props: {
      label: String,
      rules: [Object, Array]
    },
    data(){
      return {
        errMsg: ''
      }
    },
    methods: {
      valid(val) {
        const validator = new Schema(this.rules)
        validator.validate(val, errs=>{
          console.log(errs)
          if(errs.length) {
            this.errMsg = errs[0].message
          }
        })
      },
      resetVali(){
        this.errMsg = ''
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>