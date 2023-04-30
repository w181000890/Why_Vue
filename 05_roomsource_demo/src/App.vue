<template>
  <div class="app">
    <area-header
    :title="highScore.title"
    :subtitle="highScore.subtitle"></area-header>
  </div>
</template>

<script setup >
import highScore from './data/high_score.json'
import AreaHeader from './components/AreaHeader.vue'


</script>

<style lang="less" scoped>
  .app{
    width: 1024px;
    padding: 20px;
    margin:0 auto;
  }
</style>
