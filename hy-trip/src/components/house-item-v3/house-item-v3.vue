<template>
  <div class="home-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{ itemData.location }}</span>
        </div>
        <div class="name"> {{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="price">
          <div class="new">￥{{itemData.finalPrice}}</div>
          <div class="old">￥{{itemData.productPrice}}</div>
          <div class="tip">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData:{
    type:Object,
    default:()=>({})
  }
})
</script>

<style lang="less" scoped>

</style>
