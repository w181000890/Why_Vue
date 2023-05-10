<template>
  <div class="user">
    <h2>User{{ bnum }}</h2>
  </div>
</template>

<script setup>
  import {useRoute,onBeforeRouteUpdate} from 'vue-router'
  import  {ref} from 'vue'
  let bnum = ref(0)

  const route  = useRoute()
  bnum = route.params.id
  console.log(route.params.id)
  onBeforeRouteUpdate((to,from)=>{
    console.log("from",from.params.id)
    console.log("to",to.params.id)
  })
</script>

<style>
</style>