<template>
  <div class="nav">
    <template v-for = "(item,index) in proList" :key="index" >
      <div :class="{active:numindex===index}" @click="getindex(index)">
        {{item}}  
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props:{
    proList:{
      type:Array,
      default:()=>[]
    }
  },
  data(){
    return{
      numindex:0
    }
  },
  methods:{
    getindex(index){
      console.log(index)
      this.numindex=index
    }
  }
}
</script>

<style>
  .nav{
    display: flex;
    justify-content: space-evenly;
    height: 44px;
    line-height: 44px;
  }
  .active{
    color:red;
    font-weight: 700;
  }
</style>