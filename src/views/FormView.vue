<template>
  <dy-form :model="ruleForm">
    <dy-form-item label="用户名">
      <dy-form-input type="'text'" :input-name="inputName1" v-model="ruleForm.username"></dy-form-input>
    </dy-form-item>
     <dy-form-item label="密码">
      <dy-form-input type="'password'" :input-name="inputName2" v-model="ruleForm.pwd"></dy-form-input>
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
        ruleForm: {
          username: '',
          pwd: ''
        },
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