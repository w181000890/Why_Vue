import {defineStore} from 'pinia'


const useCityStore = defineStore("city",{
  state:()=>({
    cities:[]
  }),
  action:{

  }
})

export default useCityStore