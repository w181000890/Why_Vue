<template>
  <div class="HomeBanner">hahah:::{{ name }}---{{ age }}--{{ message.value}}</div>
</template>

<script>
export default {
  inject: ["name", "age","message"],
};
</script>

<style>
</style>