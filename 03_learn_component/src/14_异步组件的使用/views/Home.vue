<template>
  <div>
    home组件
    <h2>当前值：{{ counter }}</h2>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
export default {
  name:'home',
  data() {
    return {
      counter :0
    }
  },
   mounted(){
    console.log("home mounted")
  },
  unmounted(){
    console.log("home unmounted")
  }
}
</script>

<style>

</style>