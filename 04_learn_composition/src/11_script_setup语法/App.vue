<template>
  <div class="app">
    <h2>{{ message }}</h2>
 
   <button @click="changeMessage">修改message</button>
    <show-info
    name="李银河"
    :age="18"
    @info-btn-click="infoBtnClick"
    @showinfobtnApp="showinfobtnApp"
    ref = "showRef"
    ></show-info>
    <br>
    <show-info></show-info>
  </div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import ShowInfo from './ShowInfo.vue'
 
  const message = ref("hello vue")

  function changeMessage(){
    message.value = "你好啊，李银河"
  }
  function showinfobtnApp(deplay){
    console.log("🚢showinfo内部点击",deplay)
  }
  function infoBtnClick(payload) {
    console.log("监听到showInfo内部的点击:", payload)
  }
  const showRef = ref()
  onMounted(()=>{
    showRef.value.showinfomessage()
  })

</script>

<style>

</style>