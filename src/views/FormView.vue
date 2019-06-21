<template>
  <dy-form :model="ruleForm" :rules="rules" ref="loginForm">
    <!-- prop用于校验 -->
    <dy-form-item label="用户名" prop="username">
      <dy-form-input type="'text'"  v-model="ruleForm.username"></dy-form-input>
    </dy-form-item>
     <dy-form-item label="密码" prop="pwd">
      <dy-form-input type="'password'"  v-model="ruleForm.pwd"></dy-form-input>
    </dy-form-item>
    <button @click="login">登录</button>
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
        rules:
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
           pwd: [{
              required: true,
              message: '请输入密码'
          }]
        }
      },
    methods: {
      login() {
        this.$refs.loginForm.validate(valid => {
        console.log(valid)
        if (valid) {
          alert("提交登录！");
        } else {
          console.log("校验失败");
          return false;
        }
      });
      }
    },
    components: {
      DyForm,
      DyFormItem,
      DyFormInput
    }

  }
</script>

<style lang="stylus" scoped>

</style>