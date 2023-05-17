<template>
  <div class="home">
   <ul>
    <template v-for="item in $store.state.banners" :key="item.acm">
    <li>
      {{ item.title }}
    </li>
        
      
    </template>
   </ul>


  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods:{
   
  }
 
};
</script>



<script setup>
import {useStore} from 'vuex'
const store = useStore()
store.dispatch("fatchHomeMultidataAction").then(res=>{
  console.log("home中的then被回调",res)
})

</script>
 

<style>
</style>