<template>
  <div class="home">
    <h2>doubleCounter:{{ doubleCounter }}</h2>
    <h2>friendsTotalAge:{{ totalAge }}</h2>
    <h2>message:{{ message }}</h2>
    <button @click="changeAge">修改name</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCounter", "totalAge", "getFriendById"]),
  },
};
</script>



<script setup>
import {toRefs,computed} from 'vue'
import { useStore } from 'vuex';

const store = new useStore()
const {message} = toRefs(store.getters)
// const message = computed(()=>store.getters.message)
function changeAge(){
  store.state.name = 'kobe'
}
</script>


<style>
</style>