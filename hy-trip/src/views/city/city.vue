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
      <template v-for="(value,key,index) in allCity" :key="key">
        <van-tab :title="value.title" :name="key">{{  }}</van-tab>
      </template>
    </van-tabs>
    <div class="content">
      
    </div>

    <template v-for="item in 100" :key="item">
      <div>哈哈哈哈哈{{ item }}</div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { getCityAll } from "@/services";
const route = useRouter();
const searchValue = ref("");
const onBackHome = () => {
  route.push("/home");
};
// 网络请求
const allCity = ref({})
getCityAll().then(res=>{
  allCity.value = res.data
})

const tabActive = ref();
</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 30px;
}
</style>
