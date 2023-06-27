<template>
  <div class="context">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item,index) in houselist" :key="item.data.houseId">
       
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue";
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue";


const homeStore = useHomeStore();
homeStore.fetchHouselistData();
const { houselist } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
</style>
