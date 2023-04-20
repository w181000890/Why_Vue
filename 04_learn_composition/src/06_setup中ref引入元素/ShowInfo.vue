<template>
  <h2>我是showinfo</h2>
</template>

<script>
export default {
  setup(){
    function getMessage(){
      console.log("我是showinfo的方法")
    }
    return{
      getMessage
    }
  }

}
</script>

<style>

</style>