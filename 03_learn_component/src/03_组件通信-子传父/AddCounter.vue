<template>
  <div class="add">
    <button @click="addBtn(1)">+1</button>
    <button @click="addBtn(5)">+5</button>
    <button @click="addBtn(10)">+110</button>
  </div>
</template>

<script>
export default {
  methods:{
    addBtn(counter){
      this.$emit("add",counter)
    }
  }
};
</script>

<style>
</style>