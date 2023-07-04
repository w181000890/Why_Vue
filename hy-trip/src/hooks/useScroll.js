import {onMounted,onUnmounted,ref} from 'vue'
import {throttle} from 'underscore'

export default function useScroll(elRef){
  let el = window

  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  console.log("scrollHeight",scrollHeight,clientHeight,scrollTop)
  const scrollListenHandler = throttle(()=>{
    if(el===window){
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
      // console.log("scrollHeight", scrollHeight.value, clientHeight.value, scrollTop.value)
    }else{
      clientHeight.value = el.clientHeight
      scrollTop.value  = el.scrollTop
      scrollHeight.value = el.scrollHeight
      // console.log("scrollHeight", scrollHeight.value, clientHeight.value, scrollTop.value)

    }
    
    if(clientHeight.value+scrollTop.value>=scrollHeight.value){
      console.log("滚动到底部了")
      isReachBottom.value = true
      
    }
  },100)

  onMounted(()=>{
    if(elRef) el = elRef.value
    el.addEventListener("scroll",scrollListenHandler)
  })
  onUnmounted(()=>{
    el.removeEventListener("scroll",scrollListenHandler)
  })
  return {isReachBottom,clientHeight,scrollTop,scrollHeight}
}