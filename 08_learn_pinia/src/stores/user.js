 import {defineStore} from 'pinia'

const useUser = defineStore('useUser',{
  state:()=>({
    name:'why',
    age:18,
    level:100
  })
 })
export default useUser