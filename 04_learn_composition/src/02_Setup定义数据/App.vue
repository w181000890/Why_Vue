<template>
  <div class="app">
    <h2>message:{{ message }}</h2>
    <button @click="changeMessage">改变message</button>
    <hr>
    <h2>姓名：{{account.name}}</h2>
    <h2>密码：{{account.password}}</h2>
    <button @click="changeAccount">改变账户名</button>
    <hr>
    <h2>counter:{{ counter }}</h2>
    <button @click="counter++">+1</button>
    <hr>
    <h2>info.counter:{{ info.counter }}</h2>
    <button @click="info.counter.value++">+1</button>
  </div>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  setup(){
    let message = ref("hello vue")
    let counter = ref(0)
    let info ={
      counter
    }
    let changeinfo = ()=>{
      counter.value++
    }
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
      changeAccount,
      counter,
      info

    }
  }
}
</script>

<style>

</style>