<template>
  <div class="search">
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{startDateStr}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import useMainStore from '@/stores/modules/main';
  import {formatMonthDay} from '@/utils/format_date'
  import {computed} from '@vue/reactivity'
  import {storeToRefs} from 'pinia';

  const mainStore = useMainStore();
  const {startDate,endDate}= storeToRefs(mainStore);

  const startDateStr = computed(()=>formatMonthDay(startDate.value,"MM.DD"))
  const endDateStr = computed(()=>formatMonthDay(endDate.value,"MM.DD"))
</script>

<style lang="less" scoped>

</style>
