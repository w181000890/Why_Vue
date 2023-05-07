<template>
  <div class="login">
    <h2>登陆页面</h2>
    <button @click="loginClick">登陆</button>
  </div>
</template>

<script setup>
  import {useRouter} from 'vue-router'
  const router = useRouter()
  function loginClick(){
    localStorage.setItem("token",'coderwhy')
    router.push('/order')
  }
</script>

<style>

</style>