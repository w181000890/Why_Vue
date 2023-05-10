<template>
  <div id="app">
    <bai-map></bai-map>
    <!-- <map-view></map-view> -->
    <button @click="btnmessage">点击获取地址</button>
  </div>
</template>

<script>
import BaiMap from './components/BaiMap.vue'
// import mapView from './components/mapView.vue';

export default {
  name: 'App',
  components: {
    BaiMap,
    // mapView
  },
  data(){
    return {
        lnt:0,

    }
  },
  methods:{
    btnmessage(){
      navigator.geolocation.getCurrentPosition(res=>{
        console.log("获取成功",res)
      },
      err=>{
        console.log("获取失败",err)
      },
      {
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
      })
    },
  //  get_address():
  //   for i in points_lists:
  //       lat = i[1]
  //       lng = i[0]
  //       AK = '你的ak'
  //       url = 'http://api.map.baidu.com/reverse_geocoding/v3/?ak={}&output=json&coordtype=wgs84ll&location={},{}'.format(
  //           AK, lat, lng)
  //       res = requests.get(url)
  //       address = json.loads(res.text)['result']['formatted_address']
  //       points_dict = {}
  //       points_dict['point']=i
  //       points_dict['address'] = address
  //       lists.append(points_dict)
  //   print(lists)
  }
}
</script>

<style>

</style>
