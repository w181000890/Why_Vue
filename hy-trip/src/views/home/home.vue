<template>
  <div class="home">
    <home-nav-bar ></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-bar></home-search-bar>
    <home-categories/>
    <div class="search-bar" v-if="true">
      <search-bar :start-date="'09.19'" :end_date = "'09.20'">
      </search-bar>
    </div>
    <home-content/>
    
  </div>
</template>

<script setup>
import { ref,watch } from "vue";
import {useRouter} from 'vue-router'
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeCategories from "./cpns/home-categories.vue";
import homeContent from "./cpns/home-content.vue";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import homeSearchBar from "./cpns/home-search-bar.vue";
import SearchBar from "@/components/search-bar/search-bar.vue";

import useScroll from "@/hooks/useScroll";
import {computed} from '@vue/reactivity'
import useHomeStore from "@/stores/modules/home";
const router = useRouter()

const homeStore = useHomeStore()
// const value = ref(3);
// const cityClick= ()=>{
//   router.push('/city')
// }

// const cityStory = useCityStore()
// const {currentCity} = storeToRefs(cityStory)


const {isReachBottom,scrollTop} = useScroll()
watch(isReachBottom,(newValue)=>{
  homeStore.fetchHotSuggestData().then(()=>{
    isReachBottom.value = false
  })
})


const isShowSearchBar = computed(()=>{
  return scrollTop.value>=360
})


</script>

<style lang="less" scoped>
.home{
  padding-bottom: 60px;
}
.banner{
  img{
    width: 100%;
  }
}


</style>
