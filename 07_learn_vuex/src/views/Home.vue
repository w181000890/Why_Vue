<template>
  <div class="home">
  <h2>HOme组件计数器：{{ $store.state.counter }}</h2>
  <h2>computed当前计数：{{storeCounter}}</h2>
  <h2>Setup当前计数{{counter}}</h2>
  </div>
</template>

<script>
export default {
  computed:{
    storeCounter(){
      return this.$store.state.counter
    }
  }
}
</script>

<script setup>
  import { toRefs } from 'vue';
  import {useStore} from 'vuex';

  const store  = useStore()
  const {counter} = toRefs(store.state)

  function increment(){
    store.commit('increment')
  }

</script>


<style>

</style>