<template>
  <div class="showInfo">
    <h2>showInfo:{{ info }}</h2>
    <button @click="infochangeName">改变name</button>
  </div>
</template>

<script>
export default {
  name:"showInfo",
  emits:["infochangeName"],
  props:{
    info:{
      type:Object,
      default:()=>({})
    }
  },
  setup(prop,content){
    function infochangeName(){
      console.log("111")
      content.emit("infochangeName","koke")
    }
    return {
      infochangeName
    }
    
  }
  

}
</script>

<style>

</style>