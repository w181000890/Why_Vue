<template>
  <nav-bar>
    <template #left>
      <span >返回</span>
    </template>
    <template #center>
      <span >搜索</span>
    </template>
    <template #right>
      <span >登陆</span>
    </template>
    
  </nav-bar>
  <nav-bar>
    <template v-slot:[position]>
      <div>
        注册
      </div>
    </template>
  </nav-bar>
  <button @click="position='left'">左边</button>
  <button @click="position='center'">中间</button>
  <button @click="position='right'">右边</button>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  components:{
    NavBar
  },
  data(){
    return{
      position:"left"
    }
  }
}
</script>

<style>

</style>