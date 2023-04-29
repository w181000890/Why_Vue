<template>
  <div class="showinfo">
      <div>showinfo{{ name }}---{{ age }}</div>
      <button @click="showInfoBtnClick">showinfoBUtton</button>
      <button @click="showInfoBtn">showinfoBUtton</button>
  </div>
</template>

<script setup>
  const props = defineProps({
    name:{
      type:String,
      default:"默认值"
    },
    age:{
      type:Number,
      default:0
    }
  })
  const emits = defineEmits(["showinfobtnApp","infoBtnClick"])
  function showInfoBtn(){
    console.log("++++++++++")
    emits("showinfobtnApp",'showinfo内部发生点击')
  }
function showInfoBtnClick() {
  emits("infoBtnClick", "showInfo内部发生了点击")
}
function showinfomessage(){
  console.log("输出信息")
}
defineExpose({
  showinfomessage
})

</script>

<style>

</style>