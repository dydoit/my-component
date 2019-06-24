<template>
  <dy-form :model="ruleForm" :rules="rules" ref="loginForm">
    <!-- prop用于校验 -->
    <dy-form-item label="用户名" prop="username">
      <dy-form-input type="text"  v-model="ruleForm.username"></dy-form-input>
    </dy-form-item>
    <dy-form-item label="密码" prop="pwd">
      <dy-form-input type="password"  v-model="ruleForm.pwd"></dy-form-input>
    </dy-form-item>
    <dy-form-item label="手机号码" prop="tel">
      <dy-form-input type="tel"  v-model="ruleForm.tel"></dy-form-input>
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
          pwd: '',
          tel: ''
        },
        rules: {
          username: [ {
                required: true,
                message: '请输入用户名'
              },
              {
                max:4,
                message: '至多4位'
              }
          ],
          pwd: [
            {
              required: true,
              message: '请输入密码'
            }
          ],
          tel: [
            {
              required: true,
              message: '请输入手机号码'
            },
            {
              pattern: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
              message: '请输入正确的手机号码'
            }
          ]
        }
      }
    },
    methods: {
      login() {
        this.$refs.loginForm.validate(valid => {
        if (valid) {
          alert("提交登录！");
        } else {
          alert("校验失败");
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