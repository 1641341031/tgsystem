<template>
  <div class="home-container">
      <h2>this is a home page</h2>
      <el-button size="medium" @click="setTest">测试请求</el-button>
  </div>
</template>

<script>
import request from '../../utils/request'
import { Message } from 'element-ui'

  export default {
    name: 'home',
    data(){
      return {
        testData: ''
      }
    },
    methods:{
      setTest(){
        request({
          url: '/test',
          method: 'get'
        }).then(response => {
          Message({
            message: response.data,
            type: 'warning',
            duration: 5*1000
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
