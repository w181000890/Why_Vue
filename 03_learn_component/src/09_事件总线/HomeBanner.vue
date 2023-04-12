<template>
  <div>
    <button @click="btninfo">点击按钮</button>
  </div>
</template>

<script>
import eventBus from './utils/event-bus';
export default {
  methods:{
    btninfo(){
      console.log("传输前")
      eventBus.emit("changeinfo","why",18,1.88)
    }
  }
};
</script>

<style>
</style>