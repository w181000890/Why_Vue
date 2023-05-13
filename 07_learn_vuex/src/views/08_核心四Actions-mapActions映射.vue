<template>
  <div class="home">
    <h2>Home Page</h2>
    <ul>
      
    </ul>

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