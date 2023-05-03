import {ref ,onMounted} from 'vue'

export default function userCOunter(){
  let counter = ref(1)
  function increament() {
    counter.value += 1
  }
  function decreament() {
    counter.value -= 1
  }


  onMounted(()=>{
    setTimeout(()=>{
      counter.value +=1000
    },1000)
  })

  return {
    counter,
    increament,
    decreament
  }
}