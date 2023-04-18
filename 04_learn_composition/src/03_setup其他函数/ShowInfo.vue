<template>
  <div class="showInfo">
    <h2>showInfo:{{ info }}</h2>
    <button @click="infochangeName">改变name</button>
    <hr>
    <h2>roinfo:{{ roinfo }}</h2>
    <button @click="roinfo.name='rose'">改变名字</button>
    <button @click="changeroinfo">改变名字</button>
  </div>
</template>

<script>
export default {
  name:"showInfo",
  emits:["infochangeName",'changeroinfo'],
  props:{
    info:{
      type:Object,
      default:()=>({})
    },
    roinfo:{
      type:Object,
      default:()=>({})
    }
  },
  setup(prop,content){
    function infochangeName(){
      console.log("111")
      content.emit("infochangeName","koke")
    }
    function changeroinfo(){
      content.emit("changeroinfo","wm")
    }
    return {
      infochangeName,
      changeroinfo
    }
    
  }
  

}
</script>

<style>

</style>