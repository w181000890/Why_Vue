<template>
  <div>
    <ShowInfos name="why" age ="12" :height="1.88"></ShowInfos>
      <ShowInfos name="wm" age ="18" :height="1.89"></ShowInfos>
  </div>
</template>

<script>
import ShowInfos from './ShowInfos.vue';
export default {
  name:'App',
  components:{
    ShowInfos
  }

}
</script>

<style>

</style>