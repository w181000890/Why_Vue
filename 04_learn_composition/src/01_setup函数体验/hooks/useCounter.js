import {ref} from 'vue'

export default function UseCounter(){
  let counter = ref(100)
  let increatement = () => {
    counter.value++
  }
  let decreatement = () => {
    counter.value--
  }
  return {
    counter,
    increatement,
    decreatement

  }
  
}