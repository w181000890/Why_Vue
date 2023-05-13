<template>
  <div class="home">
   <h2>Store Name:{{ $store.state.name }}</h2>
   <h2>Store Level:{{ $store.state.level }}</h2>
   <button @click="changeName">修改name</button>
   <button @click="incrementLevel">修改level</button>
   <button @click="changeInfo">修改info</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
 methods:{
  changeName(){
    console.log("++++++++++")
  this.$store.commit("changeName","王小波")
}
 }
};
</script>



<script setup>
import {toRefs,computed} from 'vue'
import { useStore } from 'vuex';


const store = useStore()
 function changeName(){
    console.log("++++++++++")
  store.commit("changeName","王小波")
}
function incrementLevel(){
  store.commit("incrementLevel")
}
function changeInfo(){
  store.commit("changInfo",{
    name:"wm",
    level:200
  })
}
</script>
 

<style>
</style>