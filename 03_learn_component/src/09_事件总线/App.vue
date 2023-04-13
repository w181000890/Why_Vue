<template>
  <div class="app">
   <home></home>
   <button @click="showcategory=false">点击让category消失</button>
  <category v-if="showcategory"></category>
  </div>
  
</template>

<script>
import Home from './Home.vue'
import eventBus from './utils/event-bus';
import category from './category.vue';
export default {
  data(){
    return{
      showcategory:true
    }
  },
  components:{
    Home,
    category
  },
  created(){
    eventBus.on("changeinfo",(name,age,height)=>{
      console.log("监听后",name,age,height)
    })
  }
  
  }


</script>

<style>

</style>