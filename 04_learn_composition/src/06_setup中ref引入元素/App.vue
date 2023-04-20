<template>
  <div class="app">
    <h2 ref="nameRef">我是标题</h2>

    <show-info ref="showRef"></show-info>

    <button @click="getElement" ref="btnRef">获取元素</button>
  </div>
</template>

<script>
import ShowInfo from './ShowInfo.vue'
import {ref,onMounted} from 'vue'
export default {
components:{
  ShowInfo
},
setup(){
  const name = ref("wang")
  const nameRef = ref()
  const showRef = ref()
  const btnRef = ref()

  onMounted(()=>{
    console.log(nameRef.value)
    console.log("调用showInfo方法：",showRef.value.getMessage())
  })
  function getElement(){
    console.log(btnRef.value)
  }
    
  
  
  return{
    name,
    nameRef,
    showRef,
    getElement,
    btnRef
  }
}
}
</script>

<style>

</style>