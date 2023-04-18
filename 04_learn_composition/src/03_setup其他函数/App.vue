<template>
  <div class="app">
    <h2>app:{{ info }}</h2>
    <show-info 
    :info="info" 
    :roinfo = "roinfo"
    @infochangeName="changeName"
    @changeroinfo="changeroinfo"></show-info>
  </div>
</template>

<script>
import ShowInfo from './ShowInfo.vue';
import {reactive,ref,readonly} from 'vue'
export default {
  components:{
    ShowInfo
  },
 
    
  
  setup(){
    let info = reactive({
      name:"why",
      age:18,
      height:1.88
    })
    let roinfo = readonly(info)
    let info1 = reactive([{
      name:"why",
      age:18,
      height:1.88
    },{
      name:"why1",
      age:18,
      height:1.88
    }])
    function changeName(name){
      console.log(info1.toString())
      info.name = name
    }
    function changeroinfo(name){
      info.name = name
    }

    return {
      info,
      changeName,
      roinfo,
      changeroinfo
    }
  }
}
</script>

<style>

</style>