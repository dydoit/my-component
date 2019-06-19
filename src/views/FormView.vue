<template>
  <dy-form>
    <dy-form-item :name="labelName1" :rules="rules[0]">
      <dy-form-input :type="'text'" :input-name="inputName1" v-model="username"></dy-form-input>
    </dy-form-item>
     <dy-form-item :name="labelName2" :rules="rules[1]">
      <dy-form-input :type="'password'" :input-name="inputName2" v-model="password"></dy-form-input>
    </dy-form-item>
  </dy-form>
</template>

<script>
import DyForm from '@/components/form/form.vue'
import DyFormItem from '@/components/form/form-item.vue'
import DyFormInput from '@/components/form/form-input.vue'
  export default {
    name: 'Form',
    data () {
      return {
        labelName1: '用户名',
        labelName2: '密码',
        inputName1: 'username',
        inputName2: 'pwd',
        username: '',
        password: '',
        rules: [
          {username: 
            [
              {
                required: true,
                message: '请输入用户名'
              },
              {
                max:4,
                message: '至多4位'
              }
            ]
          },
          {
            pwd: [{
              required: true,
              message: '请输入密码'
            }]
          }
          ]
        }
      },
    components: {
      DyForm,
      DyFormItem,
      DyFormInput
    }

  }
</script>

<style lang="scss" scoped>

</style>