<template>
  <div class="showinfo">
    <h2>我是showinfo{{ name }}</h2>
  </div>
</template>

<script>
import {inject} from 'vue'
export default {
  setup(){
     let name = inject('name')
     return {
      name
     }
  }
 

}
</script>

<style>

</style>