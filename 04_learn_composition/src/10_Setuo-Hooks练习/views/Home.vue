<template>
   <div>
    <h2>Home计数：{{ counter }}</h2>
    <button @click="increament">+1</button>
    <button @click="decreament">-1</button>
    <button @click="popularbtn">首页-流行</button>
    <button @click="songbtn">首页-歌曲</button>
    <button @click="hotbtn">首页-热门</button>
    <div>
      <h2>{{ scrollPosition.x }}</h2>
      <h2>Y:{{ scrollPosition.y }}</h2>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import userCounter from '../hooks/userCounter'
import useTitle  from '../hooks/useTitle.js'
import useScorllpostion from '../hooks/useScorllpostion'
export default {
  setup(){
    const title = useTitle("首页")
    function popularbtn(){
      title.value = "流行"
    }

    function songbtn(){
      title.value = "歌曲"
    }
    function hotbtn(){
      title.value = "热门"
    }
    const {scrollPosition} = useScorllpostion()
    console.log("++++++++++++++++++++",scrollPosition.x)
    console.log("++++++++++++++++++++",scrollPosition.y)
    return{
      ...userCounter(),
      popularbtn,
      songbtn,
      hotbtn,
      scrollPosition

    }
  }
}
</script>

<style>

</style>