import { formatMonthDay } from '@/utils/format_date'
import {defineStore} from 'pinia'

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate()+1)

const useMainStore = defineStore("main",{
  state:()=>({
    token:"",
    // startDate:formatMonthDay(startDate),
    // endDate:formatMonthDay(endDate)

    startDate: startDate,
    endDate: endDate
  })
})

export default useMainStore