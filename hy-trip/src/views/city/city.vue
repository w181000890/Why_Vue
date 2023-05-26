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
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
    </van-tabs>

    <template v-for="item in 100" :key="item">
      <div>哈哈哈哈哈{{ item }}</div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();
const searchValue = ref("");
const onBackHome = () => {
  route.push("/home");
};

const tabActive = ref();
</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 30px;
}
</style>
