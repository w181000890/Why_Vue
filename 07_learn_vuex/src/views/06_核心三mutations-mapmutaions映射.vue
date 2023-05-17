<template>
  <div class="home">
    <h2>Store Name:{{ $store.state.name }}</h2>
    <h2>Store Level:{{ $store.state.level }}</h2>
    <button @click="changeName('王小波')">修改姓名</button>
    <button @click="incrementLevel">递增level</button>
    <button @click="changInfo({name:'王二',level:200})">修改info</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods:{
     ...mapMutations(['changeName','incrementLevel','changInfo'])
  }
 
};
</script>



<script setup>

</script>
 

<style>
</style>