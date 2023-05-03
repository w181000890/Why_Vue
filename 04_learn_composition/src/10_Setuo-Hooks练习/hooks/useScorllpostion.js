import {reactive} from 'vue'

export default function useScorllpostion(){
  const scrollPosition = reactive({
    x:0,
    y:0,
  })
  //监控滚动
  document.addEventListener("scroll",()=>{
    scrollPosition.x = window.scrollX
    scrollPosition.y = window.scrollY
    console.log(scrollPosition.x)
  })

  return {
    scrollPosition
  }
}