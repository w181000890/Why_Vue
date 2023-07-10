<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
        <!-- <template #indicator="{ active, total }">
          <div class="indicator">
            <template v-for="(value,key,index) in swipeGroup" :key="key">
            <span 
            class="item"
            :class="{ active:swipeData[active]?.enumPictureCategory === key}"
            >
            <span class="text"> {{ getName(value[0].title) }}</span>
            <span class="count" v-if="swipeData[active]?.enumPictureCategory===key">
              {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
            </span>
            </span>
            </template> -->
          <!-- </div>
        </template> -->
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => [],
  },
});

//对数据进行转换
const swipeGroup = {};

//思路一
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory];
  if (!valueArray) {
    valueArray = [];
    swipeGroup[item.enumPictureCategory] = valueArray;
  }
  valueArray.push(item);
}

const nameReg = /【(.*?)】/i;
const getName = (name) => {
  const results = nameReg.exec(name);
  return results[1];
};

const getCategoryIndex = (index) => {
  const valueArray = swipeGroup[item.enumPictureCategory];
  return valueArray.findIndex((data) => data === item) + 1;
};
</script>

<style lang="less" scoped>
.swipe{
  .swipe-list{
    .item{
      img{
        width:100%
      }
    }
  }
}
</style>
