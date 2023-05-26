<template>
  <!-- <div class="city top-page"> -->
  <div class="city">
    <van-search
      v-model="searchValue"
      placeholder="城市/区域/位置"
      show-action
      shape="round"
      @cancel="onBackHome"
    />
    <!-- 2.tab的切换 -->
    <!-- tabActive默认索引 -->
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title" :name="key">{{}}</van-tab>
      </template>
    </van-tabs>
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="key">
        <!-- <h2 v-show="tabActive===key">{{value.title}}</h2> -->
        <city-group v-show="tabActive===key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { getCityAll } from "@/services";
import { storeToRefs } from "pinia";

import CityGroup from './cpns/city-group.vue'

const route = useRouter();
const searchValue = ref("");
const tabActive = ref();
const onBackHome = () => {
  route.push("/home");
};
// 网络请求
const allCity = ref({});
getCityAll().then((res) => {
  allCity.value = res.data;
});

//从store中获取数据

const cityStore = useCityStore();

cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 30px;
}
</style>
