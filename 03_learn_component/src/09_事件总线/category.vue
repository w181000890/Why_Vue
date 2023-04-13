<template>
   <h2>category组件</h2>
</template>

<script>
import eventBus from './utils/event-bus';
export default {
  created(){
    eventBus.on("changeinfo",()=>{
      console.log("在category总捕获")
    })
    
  },
  unmounted(){
    console.log("销毁前")
     eventBus.off("changeinfo",()=>{
      console.log("在category销毁")
     })
    
     
  }
}
</script>

<style>

</style>