<template>
  <div class="app">
    <h2>我是生命周期函数</h2>
  </div>
</template>

<script>
import {onMounted} from 'vue'
export default {
 setup(){
  onMounted(()=>{
    console.log("onmounted")
  })
 }
}
</script>

<style>

</style>