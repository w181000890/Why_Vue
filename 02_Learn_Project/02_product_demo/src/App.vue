<template>
    <div class="app">
      <h2 class="title">我是标题栏</h2>
      <AppCountent></AppCountent>
    </div>
</template>

<script>
import AppCountent from './components/AppCountent.vue'

export default {
  name:"App ",
  components:{
    AppCountent
  }

}
  
 
</script>

<style scoped>
  .title{
    background-color: orange;
  }
</style>
