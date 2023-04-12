<template>
  <div class="app">
    <home></home>
    <button @click="message='我是王军'">点击变化姓名</button>
    <h2>{{ message }}</h2>
  </div>
  
</template>

<script>
import Home from './Home.vue'
import {computed} from 'vue'
export default {
  components:{
    Home
  },
  data(){
    return{
        message:"我是王猛"
    }
  },
  provide(){
    return{
      name:"why",
      age:18,
      message:computed(()=>
        this.message 
      )


    }
  }

}
</script>

<style>

</style>