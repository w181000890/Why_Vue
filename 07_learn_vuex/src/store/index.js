import { createStore } from "vuex";

import homeModule from './modules/home.js'
import counterModule from './modules/counter'


const store  = createStore({
  state:()=>({
    counter:100,
    rootCounter:1000,
    name:"codrewhy",
    level:100,
    avatarUrl:"http://xxxxxxx",
    friends:[
      {id:111,name:"why",age:18},
      {id:222,name:"lisi",age:20},
      {id:333,name:'wangwu',age:22}

    ],
    //服务器数据
    // banners:[],
    // recommends:[]
  }),
  getters:{
    doubleCounter(state){
      return state.counter*2
    },
    totalAge(state){
      return state.friends.reduce((pre,cur)=>{
        return pre+cur.age
      },0)
    },
    message(state,getters){
      return `name:${state.name} level:${state.level} friendTotalAge:${getters.totalAge}`
    },
    getFriendById(state){
      return function(id){
        const friend = state.friends.find(item=>item.id===id)
        return friend
      }
    }
  },
  mutations:{
    increment(state){
      state.counter++
    },
    changeName(state,payload){
      console.log("+++++++++")
      state.name = payload
    },
    incrementLevel(state){
      state.level++
    },
    changInfo(state,newInfo){
      state.level = newInfo.level
      state.name = newInfo.name
    },
    // changeBanners(state,banners){
    //   state.banners = banners
    // },
    // changeRecommends(state,recommends){
    //   state.recommends = recommends
    // }
  },
  actions:{
   incrementAction(context){
    context.commit("increment")
   },
   changeNameAction(context,payload){
    context.commit("changeName",payload)
   },
  //  fatchHomeMultidataAction(context){
  //   console.log("+++++++")
  //     return new Promise(async (resove,reject)=>{
  //       const res = await fetch("http://123.207.32.32:8000/home/multidata")
  //       const data = await res.json()
  //       console.log(data)

  //       //修改数据
  //       context.commit("changeBanners",data.data.banner.list)
  //       context.commit("recommends",data.data.recommend.list)
  //       resove("aaaa")
  //     })
  //  }
  },
  modules:{
    home: homeModule,
    counterM:counterModule 

  }
})

export default store