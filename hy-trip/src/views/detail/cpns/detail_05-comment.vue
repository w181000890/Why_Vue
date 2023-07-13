<template>
  <div class="comment">
    <detail-section title="热门评论" :more-text="`查看全部${comment.totalCount}条评论`">
      <div class="comment-inner">
        <div class="header">
          <div class="left">
            <div class="score">
              <span class="text">{{ comment.overall }}</span>
              <div class="line"></div>
            </div>
            <div class="info">
              <div class="title">{{ comment.scoreTitle }}</div>
              <div class="count">{{ comment.totalCount }}条评论</div>
            </div>
          </div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
  import detailSection from "@/components/detail-section/detail-section.vue"
  defineProps({
    comment:{
      type:Object,
      default:()=>({})
    }
  })
</script>

<style lang="less" scoped>

</style>