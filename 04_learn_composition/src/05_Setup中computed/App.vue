<template>
  
</template>

<script>
import {reactive,computed,ref} from 'vue'
export default {
  setup(){
    const name = reactive({
      firstname:"wang",
      lastname:"meng"
    })
    const score = ref(20)
    let scoreflag = computed(()=>{
      get
    })
    let fullname = computed({

  })
  return{
    fullname,
  }
  }
  



}
</script>

<style>

</style>