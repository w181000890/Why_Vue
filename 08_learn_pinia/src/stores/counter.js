import { defineStore } from 'pinia'

import useUser from './user'

const useCounter = defineStore("counter", {
  state: () => ({
    count: 99,
    friends: [
      { id: 111, name: "why" },
      { id: 112, name: "lisi" },
      { id: 113, name: "wangwu" },
    ],
  }),
 
  getters:{
    doubleCount(state){
      return state.count*2
    },
    doubleCountAddOne(){
      return this.doubleCount+1
    },
    getFriendById(state){
      return function(id){
        console.log(id)
        const friend = state.friends.find(item => item.id===id)
        return friend
      }
    },
    showMessage(state){
      const userStore = useUser()

      return `name:${userStore.name}-count:${state.count}`
    }
  },
  actions:{
    increment(){
      this.count++
    },
    incrementNun(num){
      this.count += num
    }
  }
})


export default useCounter