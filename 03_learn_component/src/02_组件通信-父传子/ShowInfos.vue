<template>
  <div>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>身高：{{height}}</h2>
  </div>
</template>

<script>
export default {
  name:"ShowInfos",
  // props:['name','age','height']
  props:{
    name:{
      type:String,
      default:"张三",

    },
    age:{
      type:[String,Number],
      default:18,
      require:true,
    },
    height:{
      type:String,
      default:"2"
    }
  }

}
</script>

<style>

</style>