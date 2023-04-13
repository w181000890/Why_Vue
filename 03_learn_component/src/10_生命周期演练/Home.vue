<template>
  <h2>home组件</h2>
</template>

<script>
export default {
  beforeUnmount(){
    console.log("home组件被卸载之前 beforeUmount")
  },
  unmounted(){
    console.log("home组件被卸载之前 unmounted")
  }
}
</script>

<style>

</style>