<template>
  <div>
    <baidu-map class="bm-view" center="北京" ak="1b4785EN1D5woKRZ6BS4NqybjsxMPU10">
       <bm-city-list anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-city-list>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
  </baidu-map>
  </div>
  
</template>

<script>
import {BaiduMap,BmGeolocation,BmCityList} from 'vue-baidu-map'

export default {
  components: {
    BaiduMap,
    BmGeolocation,
    BmCityList
  },
  handler ({ BMap, map }) {
      // 保存百度地图类
      this.BMap = BMap
      this.map = map
      this.center = ''
      this.zoom = 15
      const geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition((res) => {
        // IP地址赋值给locations对象
        this.locations.lng = res.point.lng
        this.locations.lat = res.point.lat
      })
    },
    locationSuccess () {
      console.log(`定位成功`)
    },
    clickLocation (e) {
      console.log(e)
      this.locations.longitude = e.point.lng
      this.locations.latitude = e.point.lat
      const BMapGL = this.BMap
      const map = this.map
      map.clearOverlays()
      const marker = new BMapGL.Marker(
        new BMapGL.Point(e.point.lng, e.point.lat)
      )
      map.addOverlay(marker)
      const geoc = new BMapGL.Geocoder()
      geoc.getLocation(e.point, (rs) => {
        const addressComp = rs.addressComponents
        console.log(addressComp)
        this.form.setFieldsValue({
          detailAddress:
            addressComp.province +
            addressComp.city +
            addressComp.district +
            addressComp.street +
            addressComp.streetNumber
        })
      })
    }
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>