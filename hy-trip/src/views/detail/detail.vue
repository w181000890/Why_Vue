<template>
  <div class="detail top-page" ref="detailRef">
    <!-- 占位符 -->
    <van-nav-bar
  title="房屋详情"
  left-text="旅途"
  left-arrow
  @click-left="onClickLeft"
/>

  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import {getDetailInfos} from "@/services"
import { ref,computed } from "vue";

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
</script>

<style lang="less" scoped>

</style>
