<template>
  <div class="sub">
    <button @click="subBtn(1)">-1</button>
    <button @click="subBtn(5)">-5</button>
    <button @click="subBtn(10)">-10</button>
  </div>
</template>

<script>
export default {
  methods:{
    subBtn(counter){
      this.$emit("sub",counter)
    }
  }
};
</script>

<style>
</style>