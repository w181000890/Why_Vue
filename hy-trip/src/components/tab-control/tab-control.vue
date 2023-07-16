<template>
  <div class="tab-control">
    <template v-for="(item,index) in titles" :keys="item">
      <div class="tab-control-item"
      :class="{active:index===currentIndex}"
      @click="itemClick(index)"
      >{{ item }}</div>
    </template>
  </div>
</template>

<script >
  export default{
    peops:{
      titles:{
        type:Array,
      default:()=>[]
      }
      
    },
    data(){
      return{
        currentIndex:0
      }
    },
    emits:["tabItemClick"],
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit("tabItemClick",index)
      },
      setCurrentIndex(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="less" scoped>
  .tab-control{
    display: flex;
    height: 44px;
    line-height: center;
    background: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item.active{
    color: var(--primary-color);
    font-size: 700;
  }
  .tab-control-item.active span{
    border-bottom: 3px solid var(--primary-color);
    padding: 8px;
  }
</style>
