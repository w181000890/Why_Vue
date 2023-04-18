<template>
  <div class="app">
    <h2>app:{{ info }}</h2>
    <show-info :info="info" @infochangeName="changeName"></show-info>
  </div>
</template>

<script>
import ShowInfo from './ShowInfo.vue';
import {reactive,ref} from 'vue'
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
      console.log(JSON.stringify(info1))
      info.name = name
    }
    return {
      info,
      changeName
    }
  }
}
</script>

<style>

</style>