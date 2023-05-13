<template>
  <div class="app">
    <h2>APP当前计数为:{{ $store.state.counter }}</h2>
    <hr>
    <home/>
  </div>
</template>

<script setup>
import Home from './views/Home.vue'


</script>

<style>

</style>
