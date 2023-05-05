<template>
  <div class="app">
    <h2>App</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/123">用户123</router-link>
    <router-link to="/user/456">用户456</router-link>
    <router-link to="/user1/456">用户4561</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
  .router-link-active{
    color:red;
    font-size:20px
  }
</style>
