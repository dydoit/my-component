<template>
  <div class="dy-form-item">
    <label>{{label}}</label>
    <slot></slot>
    <p v-if="validateStatus == 'error'" class="error">{{errMsg}}</p>
  </div>
</template>

<script>
  import Schema from 'async-validator'
  export default {
    name: 'DyFormItem',
    inject: ['form'],
    props: {
      label: String,
      prop: String
    },
    created () {
      this.$on('validate', this.validate)
    },
    data(){
      return {
        errMsg: '',
        validateStatus: ''
      }
    },
    mounted() {
      if (this.prop) {
        this.$dispatch('DyForm', 'formItemAdd', [this], this)
        
      }
    },
    methods: {
      validate() {
        return new Promise(resolve => {
          const descriptor = {
            [this.prop]: this.form.rules[this.prop]
          }
          console.log(this.form.rules)
          const validator = new Schema(descriptor);
          validator.validate({[this.prop]: this.form.model[this.prop]}, errors => {
            if (errors) {
              this.validateStatus = "error"
              this.errMsg = errors[0].message
              resolve(false)
            } else {
              this.errMsg = ''
              this.validateStatus = ''
              resolve(true)
            }
          })
        })
      },
      resetVali(){
        this.errMsg = ''
        this.validateStatus = ''
      }
    },
    
  }
</script>

<style lang="stylus" scoped>
.error {
  color: #f00;
}
</style>