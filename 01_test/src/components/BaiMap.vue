<template>
  <div>
    <baidu-map class="bm-view" center="北京" ak="1b4785EN1D5woKRZ6BS4NqybjsxMPU10">
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
  </baidu-map>
  </div>
  
</template>

<script>
import {BaiduMap,BmGeolocation} from 'vue-baidu-map'

export default {
  components: {
    BaiduMap,
    BmGeolocation
  }
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>