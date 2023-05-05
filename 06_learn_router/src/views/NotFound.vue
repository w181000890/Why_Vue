<template>
  <div class="notfund">
    <h2>找不到页面{{ $route.params.pathMatch }}</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .notfund{
    color:red;
  }
</style>