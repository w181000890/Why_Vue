<template>
  <div class="app">
   <home></home>
  </div>
  
</template>

<script>
import Home from './Home.vue'
import eventBus from './utils/event-bus';
export default {
  components:{
    Home
  },
  created(){
    eventBus.on("changeinfo",(name,age,height)=>{
      console.log("监听后",name,age,height)
    })
  }
  
  }


</script>

<style>

</style>