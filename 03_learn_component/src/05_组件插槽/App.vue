<template>
  <show-massage title="我是当行栏">
  </show-massage>

  <show-massage title="我是第二个当行栏">
    <a href="#">百度</a>
  </show-massage>
  <show-massage title="我是第二个当行栏">
    <img src="@/imgs/1.jpeg" style="height: 200px;" alt="">
  </show-massage>
  <show-massage title="我是第二个当行栏" >
    <button>我是按钮</button>
  </show-massage>
</template>

<script>
import ShowMassage from './ShowMassage.vue';
export default {
  components:{
    ShowMassage
  }
}
</script>

<style>

</style>