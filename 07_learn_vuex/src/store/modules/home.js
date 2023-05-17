export default{
  state:{
    banners: [],
    recommends: []
  },
  mutations:{
    changeBanners(state, banners) {
      state.banners = banners
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends
    }
  },
  actions:{
    fatchHomeMultidataAction(context) {
      console.log("+++++++")
      return new Promise(async (resove, reject) => {
        const res = await fetch("http://123.207.32.32:8000/home/multidata")
        const data = await res.json()
        console.log(data)

        //修改数据
        context.commit("changeBanners", data.data.banner.list)
        // context.commit("recommends", data.data.recommend.list)
        resove("aaaa")
      })
    }
  }
}