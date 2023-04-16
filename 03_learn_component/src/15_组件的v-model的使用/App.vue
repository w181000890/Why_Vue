<template>
  <div class="app">
    <counter v-model="counterNum">
  </counter>
  <!-- <counter :modelValue="counterNum" @update:modelValue="counterNum=$event"></counter> -->
  <counter2 v-model:counter="counterNum2"></counter2>

  </div>
  
</template>

<script>
import Counter from './Counter.vue';
import Counter2 from './Counter2.vue';
export default {
  components:{
    Counter,
    Counter2
  },
  data(){
    return{
      counterNum:0,
      counterNum2:0
    }
  },
  
}
</script>

<style>

</style>