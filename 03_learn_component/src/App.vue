<template>
  <ProductHeader></ProductHeader>
  <ProductContext></ProductContext>
  <product-footer></product-footer>
</template>

<script>
import ProductContext from './components/ProductContext.vue';
import ProductFooter from './components/ProductFooter.vue';
import ProductHeader from './components/ProductHeader.vue';

export default {
  name: 'App',
  components:{
    ProductHeader,
    ProductContext,
    ProductFooter
  }

}
</script>

<style>

</style>
