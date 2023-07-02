import {onMounted,onUnmounted,ref} from 'vue'
import {throttle} from 'underscore'

export default function useScroll(){
  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenHandler = throttle(()=>{
    clientHeight.value = document.documentElement.clientHeight
    
  },100)
}