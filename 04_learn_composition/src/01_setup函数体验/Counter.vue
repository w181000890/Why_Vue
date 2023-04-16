<template>
  <div class="counter">
    <h2>当前数值为：{{counter}}</h2>
    <button @click="increatement">+1</button>
    <button @click="decreatement">-1</button>
  </div>
</template>

<script>
import UseCounter from './hooks/useCounter'
import {ref} from 'vue'
export default {
  name:"Counter",
  setup(){
   
    return{
     ...UseCounter()

    }
  }

}
</script>

<style>

</style>