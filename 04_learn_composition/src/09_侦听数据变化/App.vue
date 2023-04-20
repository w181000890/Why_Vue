<template>
  <div class="app">
    <h2>姓名是：{{name}}</h2>
    <h2>当前计数为：{{counter}}</h2>
    <button @click="counter++">点击+1</button>
  </div>
</template>

<script>
import {ref,watch,watchEffect} from 'vue'
export default {
  setup(){
    let counter = ref(0)
    let name = ref('why')
    // watch(counter,(newValue,oldValue)=>{
    //   console.log(newValue,oldValue)
    // })
    let stopWarch = watchEffect(()=>{
      console.log('--------',counter.value)
      if(counter.value>10){
        stopWarch()
      }
    })
    return {
      counter,
      name
    }
  }
}
</script>

<style>

</style>