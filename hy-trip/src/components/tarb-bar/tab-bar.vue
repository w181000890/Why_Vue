<template>
  <div class="tab-bar">
    <div class="tab-bar-item">首页</div>
    <div class="tab-bar-item">收藏</div>
    <div class="tab-bar-item">订单</div>
    <div class="tab-bar-item">消息</div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.tab-bar{
  position:fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top:1px solid #f3f3f3;
  .tab-bar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
