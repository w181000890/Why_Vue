<template>
  <div class="content">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .content{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .left , .right{
    width: 80px;
  }
  .center{
    flex:1
  }
  .left{
    background-color:pink;
  }
  .right{
    background-color: greenyellow;
  }
  .center{
    background-color:burlywood;
  }
</style>