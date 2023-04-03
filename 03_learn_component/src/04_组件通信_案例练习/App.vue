<template>
  <div class="app">
    <ListItem :productItem="['衣服','鞋子','裤子','帽子']"></ListItem>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';
export default {
  components:{
    ListItem
  }
}
</script>

<style scoped>
.bar{
  display: flex;
  justify-content: space-around;
}

</style>