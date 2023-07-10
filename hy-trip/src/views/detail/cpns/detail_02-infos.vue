<template>
  <div class="infos">
    <div class="name">{{ topInfos.houseName }}</div>
    <div class="tags">
      
    </div>
  </div>
</template>

<script setup>
defineProps({
  topInfos:{
    type:Object,
    default:()=>({})
  }
})
</script>

<style lang="less" scoped>

</style>
