<template>
  <div class="home">
    <h2>home page</h2>
    <h2>doubleCount: {{ counterStore.doubleCount }}</h2>
    <h2>doubleCountAddOne: {{ counterStore.doubleCountAddOne }}</h2>
    <h2>friend-111: {{ counterStore.getFriendById(111) }}</h2>
    <h2>friend-112: {{ counterStore.getFriendById(112) }}</h2>
    <h2>showMessage: {{ counterStore.showMessage }}</h2>
    <button @click="changeState">修改state</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import useCounter from '@/stores/counter';


const counterStore  = useCounter()
// const userStore = useUser()

// const counterStore = storeToRefs(store)

</script>

<style>

</style>



