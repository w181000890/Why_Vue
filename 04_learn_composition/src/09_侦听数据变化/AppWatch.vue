<template>
  <div class="app">
    <h2>App</h2>
    <button @click="message='你好，李银河'">修改message</button>
    <button @click="info.frient.name='kames'">修改Info</button>
  </div>
</template>

<script>
import {reactive,ref,watch} from 'vue'
export default {
  setup(){
    //定义数据
    const message = ref("hello world")
    const info = reactive({
      name:'why',
      age:18,
      frient:{
        name:'kobe'
      }
    })
    
    //监听数据

    watch(message,(newvalue,oldvalue)=>{
      console.log(newvalue,oldvalue)
    })
    watch(info,(newValue,oldValue)=>{
      console.log(newValue,oldValue)
      console.log(newValue===oldValue)
    },{
      immediate:true
    })
    watch(()=>({...info}),(newVlaue,oldValue)=>{
      console.log(newVlaue,oldValue)
    },{
      immediate:true,
      deep:true
    })
    return{
      message,
      info
    }
  }
}
</script>

<style>

</style>