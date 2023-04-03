<template>
  <div class="app">
    <ProductItem :proList = "['裤子','鞋子','帽子']"></ProductItem>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue';
export default {
  components:{
    ProductItem
  }

}
</script>

<style>

</style>