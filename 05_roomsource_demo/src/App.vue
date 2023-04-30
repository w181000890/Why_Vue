<template>
  <div class="app">
    <area-header
    :title="highScore.title"
    :subtitle="highScore.subtitle"></area-header>
    <!-- 图片列表 -->
  <div class="item-list">
    <template v-for="item in highScore.list" :key="item.id">
      <div class="item-inner">
        <div class="cover">
          <img src="item.picture_url" alt="">
        </div>
      </div>
    </template>
    </div>
  </div>
  
</template>

<script setup >
import highScore from './data/high_score.json'
import AreaHeader from './components/AreaHeader.vue'
console.log(highScore)

</script>

<style lang="less" scoped>
  .app{
    width: 1024px;
    padding: 20px;
    margin:0 auto;
  }
</style>
