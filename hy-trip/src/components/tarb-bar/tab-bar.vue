<template>
  <div class="tab-bar">
    <!-- <template v-for="(item,index) in tabbarData" :key="index">
     <div class="tab-bar-item"
     :class="{active:index===currentIndex}"
      @click="btnActive(index,item)">
      <img v-if="index!==currentIndex" :src="getAssetUrl(item.image)" alt="">
      <img v-else :src="getAssetUrl(item.imageActive)" alt="">
      <span class="text">{{ item.text }}</span>
      
    </div>
   </template> -->
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              v-if="currentIndex !== index  "
              :src="getAssetURL(item.image)"
              alt=""
            />
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from "../../assets/data/tabbar";
import { getAssetURL } from "@/utils/load_assets";

import { ref, watch } from "vue";
import { useRoute } from "vue-router";


const route = useRoute();
const currentIndex = ref(0);

console.log("+++",route.path)

// const btnActive = (index, item) => {
//   currentIndex.value = index;
//   router.push(item.path);
// };

watch(route, (newRoute) => {
  console.log("route:",route.path)
  const index = tabbarData.findIndex(item => item.path === newRoute.path);
  console.log("index:",index)
  if (index === -1) return;
  currentIndex.value = index;
});


</script>

<style lang="less" scoped>
.tab-bar {
  // position: fixed;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // height: 50px;
  // display: flex;
  // border-top: 1px solid #f3f3f3;
  // .tab-bar-item {
  //   flex: 1;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   &.active {
  //     color: var(--primary-color);
  //   }

  //   img {
  //     width: 35px;
  //     // margin-bottom: 2px;
  //   }
  //   .text {
  //     font-size: 14px;
  //   }
  // }
  // --van-tabbar-item-icon-size: 30px !important;
  // .van-tabbar-item__icon img{
  //   height: 26px;
  // }
  :deep(.van-tabbar-item__icon img) {
    height: 26px;
  }
}
</style>
