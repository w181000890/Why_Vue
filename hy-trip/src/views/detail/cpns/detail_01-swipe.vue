<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item,index) in swipeDate" :key="index">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
      </template>
         
    </van-swipe>
  </div>
</template>

<script setup>
  const props = defineProps({
    swipeData:{
      type:Array,
      default:()=>[]
    }
  })

  //对数据进行转换
  const swipeGroup = {}

  //思路一
  for(const item of props.swipeData){
    let valueArray = swipeGroup[item.enumPictureCategory]
    if(!valueArray){
      valueArray = []
      swipeGroup[item.enumPictureCategory] = valueArray
    }
    valueArray.push(item)
  }
</script>

<style lang="less" scoped>

</style>
