<template>
  <div class="counter">
    <h2>{{ modelValue }}</h2>
    <button @click="changinfo(modelValue)">+1</button>
  </div>
</template>

<script>
export default {
  props:{
    modelValue:{
      type:Number,
      default:0
    }
  },
  emits:['update:modelValue'],
  methods:{
    changinfo(vodelValue){
      this.$emit('update:modelValue',vodelValue+1)
    }
  }
}
</script>

<style>

</style>