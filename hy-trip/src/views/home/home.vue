<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-bar></home-search-bar>
    
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useRouter} from 'vue-router'
import homeNavBar from "./cpns/home-nav-bar.vue";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import homeSearchBar from "./cpns/home-search-bar.vue";

const router = useRouter()
const value = ref(3);
const cityClick= ()=>{
  router.push('/city')
}

const cityStory = useCityStore()
const {currentCity} = storeToRefs(cityStory)
</script>

<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}


</style>
