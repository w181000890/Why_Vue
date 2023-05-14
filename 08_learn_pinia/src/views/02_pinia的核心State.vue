<template>
  <div class="home">
    <h2>home page</h2>
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <h2>level:{{ level }}</h2>
    <button @click="changeState">修改state</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

// import useCounter from '@/stores/counter';
import useUser from '../stores/user'

// const store  = useCounter()
const userStore = useUser()

const {name,age,level} = storeToRefs(userStore)
function changeState(){
  userStore.name = 'koke';
  userStore.age = 20
  userStore.level = 200
}
</script>

<style>

</style>



