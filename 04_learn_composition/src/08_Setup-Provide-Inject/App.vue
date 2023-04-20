<template>
  <div class="app">
    <h2>app:{{ name }}</h2>
    <show-info></show-info>
    <button @click="name='wang'">点击改变姓名 </button>
  </div>
</template>

<script>
import {ref,provide} from 'vue'
import ShowInfo from './ShowInfo.vue'
export default {
  components:{
    ShowInfo
  },
  setup(){
    let name = ref('why')
    let age = ref(18)
    provide("name",name)
    provide('age',age)
    return {
      name
    }
  }
}
</script>

<style>

</style>