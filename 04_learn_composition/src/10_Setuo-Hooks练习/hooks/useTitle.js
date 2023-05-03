import {ref ,watch} from 'vue'
export default function useTitle(titleValue){
   
  const title = ref(titleValue)
  console.log(title.value)
    watch(title,(newValue)=>{
      document.title = newValue
    },{
      immediate:true
    })
  return title
}