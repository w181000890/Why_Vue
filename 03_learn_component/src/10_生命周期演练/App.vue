<template>
  <h2>App组件</h2>
  <button @click="isShow = !isShow">点击切换home组件</button>
  <home v-if="isShow"></home>
</template>

<script>
import Home   from "./Home.vue"
export default {
  components:{
    Home
  },
  data(){
    return{
      isShow:true
    }
  },
  // 1.组件被创建之前
  beforeCreate(){
    console.log("beforeCreate")
  },
  //2.组件创建完成
  created(){
    console.log("created")
    console.log("1.发送网络请求，请求数据")
    console.log("2.监听eventbus事件")
    console.log("3.监听watch数据")
  },
  //3.组件template准备被挂载
  beforeMount(){
    console.log("beforeMount")
  },
  //4.组件template被挂载：虚拟DOM->真实DOM
  mounted(){
    console.log("mounted")
    console.log("1.获取DOM")
    console.log("2.使用DOM")
  },
  // 5.数据发生变化
  //5.1准备更新DOM
  beforeUpdate(){
    console.log("beforeUpdate")
  },
  // 5.2更新DOM
  updated(){
    console.log("updated")
  },
  //6.卸载VNode ->DOM元素
  // 6.1 卸载之前
  beforeUnmount(){
    console.log("beforeUnmount")
  },
  // 6.2 DOM元素被卸载完成
  unmounted(){
    console.log("unmounted")
  }
}
</script>

<style>

</style>