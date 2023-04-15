<template>
  <div>
    about组件-{{ name }}--{{ age }}
    <button @click="getmessage" >点击输出</button>
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
      default:""
    },
    age:{
      type:Number,
      default:0
    }
  },
  emits:["changeinfo"],
  methods:{
    getmessage(){
      this.$emit("changeinfo","你好 vue")
    }
  }
}
</script>

<style>

</style>