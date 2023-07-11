<template>
  <div class="infos">
    <div class="name">{{ topInfos.houseName }}</div>
    <div class="tags">
      <template v-for="(item,index) in topInfos.houseTags" :key="index">
        <span
        class="item"
        v-if="item.tagText"
        :style="{color:item.tagText.color,backgroud:item.tagText.background.color}"
        >
        {{ item.tagText.text }}
        </span>
      </template>
    </div>

    <div class="comment extra">
      <div class="left">
        <span class="score">{{ topInfos.commentBrief.overall }}</span>
        <span class="title"> {{ topInfos.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ topInfos.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="count">
          {{ topInfos.commentBrief.totalCount }}条评论
          <vant-icon name="arrow"></vant-icon>
        </span>
      </div>
    </div>
    <div class="position extra">
      <div class="left address">
        {{ topInfos.nearByPosition.address }}
      </div>
      <div class="right">
        地图·周边
        <van-icon name="arrow" />
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  topInfos:{
    type:Object,
    default:()=>({})
  }
})
</script>

<style lang="less" scoped>
  .infos{
    padding:16px;
    background-color: #fff;
    .name{
      font-weight: 700;
      font-size: 20px;
      
    }
  }
</style>
