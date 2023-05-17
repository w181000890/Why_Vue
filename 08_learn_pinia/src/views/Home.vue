<template>
  <div class="home">
    <h2>home page</h2>
    <h2>count: {{ count}}</h2>
    <h2>轮播的数据</h2>
    <ul>
      <template v-for="item in homeStore.banners" :key="item.title">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import useCounter from '@/stores/counter';
import useHome from '../stores/home'


const counterStore  = useCounter()
const homeStore = useHome()
// const userStore = useUser()

const {count} = storeToRefs(counterStore)

homeStore.fetchHomeMultidata().then(res=>{
  console.log("fetchHomeMultidata的action已经完成了:", res)
})

</script>

<style>

</style>



