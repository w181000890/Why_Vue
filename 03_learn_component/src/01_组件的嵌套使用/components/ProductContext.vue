<template>
  <div class="content">
    <h2>网页内容</h2>
    <item></item>
  </div>
</template>

<script>
import item from './item.vue'
export default {
  name:"ProductContent",
  components:{
    item
  }

}
</script>

<style scoped>
.content{
  background-color: pink;
}

</style>