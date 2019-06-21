<template>
  <input :type="type" :value="inputValue" @input="inputHandler" 
  @blur="validate"
  @focus="resetVali"
  >
</template>

<script>
  export default {
    name:'DyFormInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: String
    },
    data(){
      return {
        inputValue: this.value
      }
    },
    methods: {
      validate() {
       this.$parent.validate()
      },
      resetVali(){
        this.$parent.resetVali()
      },
      inputHandler(e){
        this.inputValue = e.target.value
        this.$emit('input', this.inputValue)
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>