<template>
  <div class="home">
  <!-- 模版中直接使用多个状态 -->
  <h2>name:{{ $store.state.name }}</h2>
  <h2>level:{{ $store.state.level }}</h2>
  <h2>avatar:{{ $store.state.avatarUrl }}</h2>
  <!-- 2.计算属性 -->
  <h2>name():{{ nameComputed }}</h2>
  <!-- 3.计算属性：（映射状态：数组语法） -->
  <h2>name:{{ name }}</h2>
  <h2>level:{{ level }}</h2>
  <h2>avatarUrl:{{ avatarUrl }}</h2>
  <h2></h2>
  <!-- 计算属性：（映射状态：对象语法） -->
  <h2>sName:{{ sName }}</h2>
  <h2>sLevel:{{ sLevel }}</h2>

  <!-- setup计算属性：对象语法 -->
  <h2>setup:name:{{ name }}</h2>
  <h2>setup:level:{{ level }}</h2>

  <button @click="increament">点击改变level</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    nameComputed(){
      return this.$store.state.name
    },
    ...mapState(["name","level","avatarUrl"]),
    ...mapState({
      sName:(state)=>state.name,
      sLevel:(state)=>state.level
    })
  }
}
</script>

<script setup>
  import {toRefs} from 'vue';
  import { useStore } from 'vuex';

  const store = useStore()
  const {name,level} = toRefs(store.state)

  function increament(){
    store.state.level++
  }
</script>


<style>

</style>