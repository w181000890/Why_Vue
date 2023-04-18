<template>
  <div class="app">
    <input type="text" class="text" v-model="info.name">
    <input type="password" v-model="info.password">
    <hr>
     <input type="text" class="text" v-model="name">
    <input type="password" v-model="password">
  </div>
</template>

<script>
import {reactive,ref,readonly} from 'vue'
export default {
  setup(){
    let info = reactive({
      name:"why",
      password:'123456'
    })
    let roinfo = readonly(info)
    let name = ref('wm')
    let password = ref('789')
    return{
      info,
      roinfo,
      name,
      password
    } 

  }

}
</script>

<style>

</style>