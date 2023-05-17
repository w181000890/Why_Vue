<template>
  <div class="home">
    <h2>当前计数:{{ $store.state.counter }}</h2>
    <h2>Store name:{{ $store.state.name }}</h2>
    <button @click="counterBtnClick">修改计数</button>
   
    <button @click="nameBtnClick">修改info</button>
    <button @click="increment">setup中修改计数</button>
    


  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods:{
    counterBtnClick(){
      this.$store.dispatch("incrementAction")
    },
    nameBtnClick(){
      this.$store.dispatch("changeNameAction","aaa")
    }
  }
 
};
</script>



<script setup>
import {useStore} from 'vuex'

const store = useStore()
  function increment(){
    store.dispatch("incrementAction")
  }
</script>
 

<style>
</style>