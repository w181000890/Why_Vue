<template>
    <div class="app">
      <h2 ref="message">{{ message }}</h2>
      <button @click="message='hello vue'" ref="btn">改变message</button>
      <button @click="getRef">获取ref</button>
      <Banner ref="banner"></Banner>
    </div>
</template>

<script>
import Banner from './Banner.vue';
export default {
  components:{
    Banner
  },
  data(){
    return{
      message:"HEllo World"
    }
  },
  methods:{
    getRef(){
      console.log(this.$refs.message)
      console.log(this.$refs.banner)
      console.log(this.$refs.banner.changeinfo)
      console.log(this.$refs.banner.$el.nextSibling)
    }
  }
}
</script>

<style>

</style>