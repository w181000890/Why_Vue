<template>
   <div class="app">
      <h2>当前计数:{{ counter }}</h2>
      <AddCounter @add="btnAdd"></AddCounter>
      <sub-counter @sub="btnSub"></sub-counter>
      
   </div>
</template>

<script>
import AddCounter from './AddCounter.vue'
import SubCounter from './SubCounter.vue'
export default {
  components: { SubCounter, AddCounter},
  data(){
    return{
      counter:0
    }
  },
  methods:{
    btnAdd(counter){
      this.counter += counter
    },
    btnSub(counter){
      this.counter -= counter
    }
  }

}
</script>

<style>

</style>