<template>
  <div class="counter">
    <h2>counter2:{{ counter }}</h2>
    <button @click="changinfo(counter)">+1</button>
  </div>
</template>

<script>
export default {
  props:{
    counter:{
      type:Number,
      default:0
    }
  },
  emits:['update:counter'],
  methods:{
    changinfo(vodelValue){
      this.$emit('update:counter',vodelValue+1)
    }
  }
}
</script>

<style>

</style>