<template>
  <div class="app">
    <h2>名字：{{name.firstname}}{{ name.lastname }}</h2>
    <h2>分数：{{scoreflag}}</h2>
    <button @click="changename">点击改变名字</button>
  </div>
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
       return score.value>60?"及格":'不及格'
    })
    let fullname = computed({
      get:function(){
        return name.firstname+name.lastname
      },
      set:function(newvalue){
        let tempName = newvalue.split(" ")
        name.firstname = tempName[0]
        name.lastname = tempName[1]
      }

  })
  function changename(){
    fullname.value = 'zhang shan'
  }
  return{
    name,
    fullname,
    scoreflag,
    changename
  }
  }
  



}
</script>

<style>

</style>