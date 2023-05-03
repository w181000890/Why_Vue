<template>
  <div class="app">
   <room-area :high-score="highScore"></room-area>
  </div>
</template>

<script setup >
import { ref} from 'vue'
// import highScore from "./data/high_score.json";
import RoomArea from './components/RoomArea.vue'
// console.log(highScore);

const highScore = ref()

setTimeout(()=>{
  import("./data/high_score.json").then(res=>{
    highScore.value = res.default
  })
},1000)
</script>

<style lang="less" scoped>
.app {
  width: 1032px;
  padding: 20px;
  margin: 0 auto;
}

  
</style>
