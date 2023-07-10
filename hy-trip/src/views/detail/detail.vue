<template>
  <div class="detail top-page" ref="detailRef">
    <!-- 占位符 -->
    <van-nav-bar
  title="房屋详情"
  left-text="旅途"
  left-arrow
  @click-left="onClickLeft"
/>

<div class="main" v-if="mainPart" v-memo="[mainPart]">
 <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"></detail-swipe>
  <
</div>

  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import {getDetailInfos} from "@/services"
import { ref,computed } from "vue";

import DetailSwipe from "./cpns/detail_01-swipe.vue"

  const router = useRouter()
  const route = useRoute()

  const houseId = route.params.id
  //发送网络请求获取数据
  const detailInfo = ref({})
  const mainPart = computed(()=>detailInfo.value.mainPart)
  getDetailInfos(houseId).then(res=>{
    detailInfo.value = res.data
  })

  //监听返回按钮点击
  const onClickLeft=()=>{
    router.back()
  }

const sectionEls = ref({})
const names = computed(()=>{
  return Object.keys(sectionEls.value)
})

const tabClick = (index)=>{
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  let instance = el.offsetTop
  if(index !==0){
    instance = instance - 44

  }
  detailRef.value.scrollTo({
    top:instance,
    behavior:"smooth"
  })
}


</script>

<style lang="less" scoped>

</style>
