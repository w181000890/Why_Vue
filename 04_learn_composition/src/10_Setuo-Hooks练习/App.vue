<template>
  <div class="app">
    <!-- <home></home>
    <about></about> -->
      <button @click="changhome">点击切换home</button>
      <button @click="changabout">点击切换about</button>
    <component :is="componentID"></component>



    <div class="content"></div>

  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  <br><br><br><br><br><br>
  </div>
</template>

<script>
import About from './views/About.vue'
import Home from './views/Home.vue'
import {ref} from 'vue'
export default {
  components:{
    About,
    Home
  },
  setup(){
    const componentID = ref("home")
    function changhome(){
      componentID.value = "home"
    }
    function changabout(){
      componentID.value = "about"
    }
    return {
      componentID,
      changhome,
      changabout
    }
  }
}
</script>

<style scoped>
  .content {
    width: 3000px;
    height: 100px;
    background-color: orange;
  }
</style>