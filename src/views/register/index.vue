<template>
    <div class="register-container">
        <el-form :model="registerForm" :rules="rules" ref="registerForm" class="rg-form-container" label-width="0px" >
            <el-form-item prop="name" class="unify-with">
                <el-input v-model="registerForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item prop="email" class="unify-with">
                <el-input v-model="registerForm.email" placeholder="请输入邮箱" prefix-icon="el-icon-message"></el-input>
            </el-form-item>
			<el-form-item class="unify-with">
                <el-input v-model="registerForm.nickName" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item prop="password" class="unify-with">
                <el-input v-model="registerForm.password" placeholder="请输入密码" show-password prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item prop="passwords" class="unify-with">
                <el-input v-model="registerForm.passwords" placeholder="再次输入密码" show-password prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item class="unify-with">
                <el-button type="primary" style="width: 100%" @click="handleRegister">注册</el-button>
            </el-form-item>
        </el-form>
        <!-- <div  class="divider"></div> -->
        <div class="lg-container">
            <el-link type="primary" @click="toLogin">立即登录</el-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'registry',
        data(){
            var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerForm.password !== '') {
            this.$refs.registerForm.validateField('passwords');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
            return {
                registerForm: {
                    username: '',
                    email: '',
					icon: 'iconDefault',
					nickName: '',
					note: '',
                    password: '',
                    passwords: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入名称', trigger: 'blur' },
                        { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ],
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwords: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                }
            }
        },
		methods: {
		
			handleRegister(){
                let registerData = {...this.registerForm}; //对象的浅拷贝
                delete registerData.passwords;
                
				this.$store.dispatch('Register', registerData).then(() => {
				this.$router.push({path: '/login'})
			}).catch(() => {
				console.log("register fail");
			})
			},
			
			toLogin(){
				this.$router.push({path: '/login'})
			}
		}
    }
</script>

<style lang="less" scoped>
body{
    background-color: rgb(247, 246, 245);
}
.register-container{
    border: 1px solid rgb(233, 231, 230);
    border-radius: 5px;
    width: 400px;
    height: 100%;
    margin: 100px auto;
    background-color: #fff;
    .unify-with{
        margin: 20px auto;
        width: 300px;
    }
    // .divider{
    //     border-bottom: 1px solid rgb(233, 231, 230);
    //     width: 300px;
    //     margin: 16px auto;
    // }
    .lg-container{
        // margin: 0 auto;
        padding: 12px;
        display: flex;
        flex-direction: row-reverse;
    }
}
</style>