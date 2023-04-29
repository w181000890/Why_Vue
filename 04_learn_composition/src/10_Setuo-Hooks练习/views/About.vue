<template>
  <div>
    <h2>About计数：{{ counter }}</h2>
    <button @click="increament">+1</button>
    <button @click="decreament">-1</button>
  </div>
</template>

<script>
import {ref} from 'vue'
import userCounter from '../hooks/userCounter';
import useTitle  from '../hooks/useTitle'
export default {
  setup(){
    useTitle("关于")
    return{
      ...userCounter()
    }
  }
}
</script>

<style>

</style>