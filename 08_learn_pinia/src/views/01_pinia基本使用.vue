<template>
  <div class="home">
    <h2>home page</h2>
    <h2>counter:{{ count }}</h2>
    <h2>useCounter.count:{{ useCounter.counter }}</h2>
    <button @click="incrementCount">count+1</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import useCounter from '@/stores/counter';

const store  = useCounter()

const {count} = storeToRefs(store)
function incrementCount(){
  store.count++
}
</script>

<style>

</style>



