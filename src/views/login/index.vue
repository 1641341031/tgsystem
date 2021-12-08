<template>
  <div class="login-container">
      <!-- 头像 -->
      <div class="vector-container"><img src="@/assets/touxiang.jpeg" alt="touxiang"></div>
      <!-- 登录表单 -->
      <el-form :model="loginForm" ref="loginForm" label-width="0px" class="login-form-container" :rules="rules">
          <el-form-item prop="email">
              <el-input placeholder="用户邮箱" prefix-icon="el-icon-user" v-model="loginForm.email" class="set-with" ></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="loginForm.password" show-password class="set-with" ></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="success" class="login-btn set-with" @click="onSubmit">登录</el-button>
          </el-form-item>
      </el-form>
      <div  class="divider"></div>
      <!-- 用户注册或忘记密码 -->
      <div class="rg-fg-container">
          <el-button size="medium" @click="open1">用户注册</el-button>
          <el-button size="medium" @click="open2">忘记密码</el-button>
      </div>
      

  </div>
</template>

<script>

  export default {
    name: 'Login',
    data: function () {
        return {
            loginForm: {
                email: '',
                password: ''
            },
            rules: {
                email: [
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 10, message: '请正确输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit: function () {
            this.$message({
                message: '恭喜你，成功登录',
                type: 'success'
                })
        },
        open1: function () {
            this.$message({
                message: '还没完成开发'
                })
        },
        open2: function () {
            this.$message({
                message: '还没完成开发'
                })
        }
    }
  }
</script>

<style lang="less" scoped>
body{
    background-color: rgb(247, 246, 245);
}
.login-container{
    width: 400px;
    height: 100%;
    border: 1px solid #EBEEF5;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 100px auto;
    background-color: #fff;
    .vector-container{
        display: flex;
        flex-direction: column;
        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 16px auto;
        }
    }
    .login-form-container{
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        .set-with{
            width: 300px;
        }
    }
    .divider{
        border-bottom: 1px solid rgb(233, 231, 230);
        width: 300px;
        margin: 16px auto;
    }
    .rg-fg-container{
        margin: 16px auto;
        display: flex;
        justify-content: space-around;
    }
}
</style>
