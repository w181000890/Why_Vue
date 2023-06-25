import { getHomeHostSuggests } from "@/services";
import {defineStore} from "pinia"

const useHomeStore = defineStore("home",{
  state:()=>({
    hotSuggests:[],
    categories:[]
  }),
  actions:{
    async fetchHotSuggestData(){
      const res = await getHomeHostSuggests()
      this.hotSuggests = res.data
      console.log("home-hot:",this.hotSuggests)
    }
  }
})
export default useHomeStore