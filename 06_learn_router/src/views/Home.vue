<template>
  <div class="home">
    <h2>home</h2>
    <div class="home-nav">
      <router-link to="/home/recommend">推荐</router-link>
      <router-link to="/home/ranking">排行榜</router-link>

    </div>
    <button @click="loginClick">退出登录</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
  function loginClick(){
    localStorage.removeItem("token")
  }
</script>

<style>

</style>