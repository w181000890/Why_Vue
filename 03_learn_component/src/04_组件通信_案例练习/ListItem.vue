<template>
  <div>
    <div class="bar" v-for="(item,index) in productItem" :key='item'>{{ item }}</div>
  </div>
</template>

<script>
export default {
  props:{
    productItem:{
      type:Array,
      default:()=>[]
    }
  }

}
</script>

<style scoped>
  .bar{
  display: flex;
  justify-content: space-around;
  height: 44px;
  line-height: 44px;

}
</style>