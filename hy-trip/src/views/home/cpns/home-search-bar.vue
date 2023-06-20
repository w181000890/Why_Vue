<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text"> 我的位置 </span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期范围 -->
    <div calss="section">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span calss="tip">离店</span>
          <span class="time" > {{ endTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { formatMonthDay, getDiffDays } from "@/utils/format_date";
import useHomeStore from "@/stores/modules/home";

const cityStore = useCityStore();

const { currentCity } = storeToRefs(cityStore);

//点击跳转
const router = useRouter();
const cityClick = () => {
  router.push("/city");
};
//当前位置
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("获取位置成功", res);
    },
    (err) => {
      console.log("获取位置失败：", err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
};

//日期范围的处理

const nowDate = new Date();
const newDate = new Date();
newDate.setDate(nowDate.getDate() + 1);

const startDate = ref(formatMonthDay(nowDate));
const endDate = ref(formatMonthDay(newDate));
const stayCount = ref(getDiffDays(nowDate, newDate));

const showCalendar = ref(false);
const onConfirm = (value) => {
  //1.设置日期
  const selectStartDate = value[0];
  const selectEndDate = value[1];
  startDate.value = formatMonthDay(selectStartDate);
  endDate.value = formatMonthDay(selectEndDate);
  stayCount.value = getDiffDays(selectStartDate, selectEndDate);
  //2.隐藏日历
  showCalendar.value = false;
};

// 热门建议

const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.search-box{
  --van-calendar-popup-height:100%;

}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  .city {
    flex: 1;
  }
  .position {
    width: 74px;
    display: flex;
    align-items: center;
    .text {
      position: relative;
      // top:6px;
      font-size: 12px;
    }
    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
.section{
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .start{
    flex:1;
  }
  .end{
    min-width: 30%;
    padding-left: 20px;
  }
}
</style>
