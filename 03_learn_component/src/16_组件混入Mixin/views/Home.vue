<template>
  <h2>
    Home Content
  </h2>
</template>

<script>
import mixinDefalut from '../mixin/meaage-mixin'
export default {
  mixins:[mixinDefalut],
  data(){
    return{
      message:"hello vue"
    } 
  },
  created(){
    console.log("created",this.message)
  }

}
</script>

<style>

</style>