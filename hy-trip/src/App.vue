<template>
  <div class="app">
    <router-view></router-view>
   <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
  </div>
</template>

<script setup>
import TabBar from '@/components/tarb-bar/tab-bar.vue'
import {useRoute}  from 'vue-router'

const route = useRoute()
</script>


<style scoped>

</style>
