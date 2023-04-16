<template>
  <div class="app">
    <h2>message:{{ message }}</h2>
    <button @click="changeMessage">改变message</button>
    <hr>
    <h2>姓名：{{account.name}}</h2>
    <h2>密码：{{account.password}}</h2>
    <button @click="changeAccount">改变账户名</button>
  </div>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  setup(){
    let message = ref("hello vue")
    let account = reactive({
      name:'wm',
      password:'1234'
    })
    let changeMessage = ()=>{
      message.value = "hello world"
    }
    const changeAccount =()=>{
      account.name = 'why'
    }



    return {
      message,
      changeMessage,
      account,
      changeAccount
    }
  }
}
</script>

<style>

</style>