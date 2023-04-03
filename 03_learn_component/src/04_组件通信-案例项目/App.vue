<template>
  <div class="app">
    <ProductItem :proList = "['裤子','鞋子','帽子']" :itemhtml="['裤子列表','鞋子列表','帽子列表']"></ProductItem>
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