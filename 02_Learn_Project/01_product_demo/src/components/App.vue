<template>
  <div>
    <h2>{{content}}</h2>
  <h2>当前值为{{counter}}</h2>
  <button @click="increament">+1</button>
  <product-item></product-item>
  </div>
  
</template>

<script>
import ProductItem from "./ProductItem"
export default {
  components:{"product-item":ProductItem},
  data() {
    return {
      content:"我是标题",
      counter:0
    }
 
},
methods:{
  increament(){
    this.counter++
  }
}
}
</script>

<style>

</style>