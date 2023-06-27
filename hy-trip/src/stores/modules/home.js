import { getHomeHostSuggests, getHomeCategories, getHomeHouselist } from "@/services";
import {defineStore} from "pinia"

const useHomeStore = defineStore("home",{
  state:()=>({
    hotSuggests:[],
    categories:[],

    currentPage:1,
    houselist:[]
  }),
  actions:{
    async fetchHotSuggestData(){
      const res = await getHomeHostSuggests()
      this.hotSuggests = res.data
      // console.log("home-hot:",this.hotSuggests)
    },

    async fetchCategorriesData(){
      const res = await getHomeCategories()
      this.categories = res.data
      console.log("data",res)
    },
    async fetchHouselistData(){
      const res  = await getHomeHouselist(this.currentPage)
      this.houselist.push(...res.data)
      this.currentPage++
    }

  }
})
export default useHomeStore