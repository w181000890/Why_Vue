<template>
  <div>
    <h1>我是App</h1>
    <productItem></productItem>
  </div>
</template>

<script>
import productItem from './components/productItem.vue';
export default {
      name:"App",
      components:{
        productItem
      }
}
</script>

<style>

</style>