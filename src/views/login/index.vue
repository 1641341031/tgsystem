<template>
  <div class="login-container">
      <!-- 头像 -->
      <div class="vector-container"><img src="@/assets/touxiang.jpeg" alt="touxiang"></div>
      <!-- 登录表单 -->
      <el-form :model="loginForm" ref="loginForm" label-width="0px" class="login-form-container" :rules="rules">
          <el-form-item prop="username">
              <el-input placeholder="用户名" prefix-icon="el-icon-user" v-model="loginForm.username" class="set-with" ></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input placeholder="密码" prefix-icon="el-icon-lock" v-model="loginForm.password" show-password class="set-with" ></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="success" class="login-btn set-with" @click="handleLogin">登录</el-button>
          </el-form-item>
      </el-form>
      <div  class="divider"></div>
      <!-- 用户注册或忘记密码 -->
      <div class="rg-fg-container">
          <el-button size="medium" @click="toRegister">用户注册</el-button>
          <el-button size="medium" @click="open2">忘记密码</el-button>
      </div>
      

  </div>
</template>

<script>

import {isvalidUsername} from '@/utils/validate';
import {setCookie,getCookie} from '@/utils/support';

  export default {
    name: 'Login',
    data: function () {
		const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 3) {
          callback(new Error('密码不能小于3位'))
        } else {
          callback()
        }
      };
        return {
            loginForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [{required: true, trigger: 'blur', validator: validateUsername}],
				password: [{required: true, trigger: 'blur', validator: validatePass}]
            }
        }
    },
	created() {
      this.loginForm.username = getCookie("username");
      this.loginForm.password = getCookie("password");
      if(this.loginForm.username === undefined||this.loginForm.username==null||this.loginForm.username===''){
        this.loginForm.username = 'admin';
      }
      if(this.loginForm.password === undefined||this.loginForm.password==null){
        this.loginForm.password = '';
      }
    },
    methods: {
        handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.$store.dispatch('Login', this.loginForm).then(() => {
              setCookie("username",this.loginForm.username,15);
              setCookie("password",this.loginForm.password,15);
              this.$router.push({path: '/home'})
            }).catch(() => {
			console.log("login fail");
            })
          } else {
            console.log('参数验证不合法！');
            return false
          }
        })
      },
	  toRegister(){
		this.$router.push({path: '/register'})
	  },
	  open2(){
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
