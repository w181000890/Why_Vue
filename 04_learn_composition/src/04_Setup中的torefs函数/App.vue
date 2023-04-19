<template>
  <div class="app">
  <h2>app:{{ info }}</h2>
  <h2>{{ name }}</h2>
  <button @click="name = 'wm'">改变名字</button>
  <button @click="name = 'wm'">改变名字</button>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {

  setup(props,context){
    let info= reactive({
      name:'why',
      age:18,
      height:1.88
    })
    const {name,age} = toRefs(info)
    const height = toRef(info)

    return {
      info,name,age,height
    }
  }

}
</script>

<style>

</style>