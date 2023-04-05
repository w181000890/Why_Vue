<template>
  <div>{{ title }}</div>
  <slot><p>我是插槽默认值</p></slot>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:"我是默认值"
    }
  }

}
</script>

<style>

</style>