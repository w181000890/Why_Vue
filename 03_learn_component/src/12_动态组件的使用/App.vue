<template>
  <div class="app">
     <button v-for="(item,index) in listInfo" :key="index" 
     @click="getindex(index)"
     :class="{active:btnIndex===index}">
      {{item}}
     </button>
     <!-- <template v-if="btnIndex===0">
      <home></home>
     </template>
     <template v-if="btnIndex===1">
      <about></about>
     </template>
     <template v-else-if="btnIndex===2">
      <category></category>
     </template> -->
     <component :is="listInfo[btnIndex]"
     name="why" 
     :age="18"
     @changeinfo="meaagecon"></component>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import Category from './views/Category.vue'
export default {
  components:{
    Home,
    About,
    Category
  },
  data(){
    return{
      listInfo:['home',"about",'category'],
      btnIndex:0
    }
  },methods:{
    getindex(index){
      this.btnIndex = index
    },meaagecon(paly){
      console.log(paly)
    }
  }
}
</script>

<style>
  .active{
    color:red
  }
</style>