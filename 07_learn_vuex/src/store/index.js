import { createStore } from "vuex";



const store  = createStore({
  state:()=>({
    counter:100,
    name:"codrewhy",
    level:100,
    avatarUrl:"http://xxxxxxx",
    friends:[
      {id:111,name:"why",age:18},
      {id:222,name:"lisi",age:20},
      {id:333,name:'wangwu',age:22}

    ],
    //服务器数据
    //banners:[],
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
    }
  }
})

export default store