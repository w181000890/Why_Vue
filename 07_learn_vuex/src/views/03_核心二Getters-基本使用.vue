<template>
  <div class="home">
    <h2>counter*2:{{ $store.getters.doubleCounter }}</h2>
    <h2>totalAge:{{ $store.getters.totalAge }}</h2>
    <h2>message:{{ $store.getters.message }}</h2>
    <hr>
    <h2>id-111的朋友信息:{{ $store.getters.getFriendById(111) }}</h2>
    <h2>id-222的朋友信息:{{ $store.getters.getFriendById(222) }}</h2>
  </div>
</template>

<script>
export default {
  computed:{
  }
}
</script>

<script setup>
 
</script>


<style>

</style>