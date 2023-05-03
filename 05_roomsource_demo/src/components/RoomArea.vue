<template>
  <div>
     <area-header :title="highScore.title" :subtitle="highScore.subtitle" />
    <!-- 图片列表 -->
    <div class="room-list">
      <template v-for="item in highScore.list" :key="item.id">
        <room-item :item="item"></room-item>
      </template>
    </div>
  </div>
</template>

<script setup>
import AreaHeader from "./AreaHeader.vue";
import RoomItem from "./RoomItem.vue";
defineProps({
  highScore:{
    type:Object,
    default:()=>({})
  }
})
</script>

<style lang="less" scoped>
  .room-list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px -8px;
  }
</style>