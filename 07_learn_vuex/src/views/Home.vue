<template>
  <div class="home">
  
      
    <h2>counter模块:{{ $store.state.counterM.count }}</h2>
    <h2>counter模块getters:{{ $store.getters['counterM/doubleCount'] }}</h2>
    <button @click="incrementCount">count模块+1</button>

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
function incrementCount(){
  store.dispatch("counterM/incrementCountAction")
}


</script>
 

<style>
</style>