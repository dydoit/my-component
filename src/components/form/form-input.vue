<template>
  <input :type="type" :name="inputName" :value="value" @input="$emit('input', $event.target.value)" 
  @blur="vali"
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
      inputName: String,
      value: String
    },
    data(){
      return {
        
      }
    },
    methods: {
      vali() {
       this.$parent.valid({[this.inputName]: this.value})
      },
      resetVali(){
        this.$parent.resetVali()
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>