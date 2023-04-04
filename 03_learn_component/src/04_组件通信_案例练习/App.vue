<template>
  <div class="app">
    <Product-Item :proList = "['裤子','鞋子','帽子']" @add="tabItem"/>
    <h2>{{ itemhtml[numindex] }}</h2>
    <button @click="tabItem(0)">点击我</button>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue';
export default {
  components:{
    ProductItem
  },
  data() {
    return {
      itemhtml:['裤子列表','鞋子列表','帽子列表'],
      numindex:0
    }
  },
  methods:{
    tabItem(index){
      // console.log(index)
      console.log("yyyyyy")

      this.numindex = index
      console.log(this.itemhtml[index])
    }
  }

}
</script>

<style>

</style>