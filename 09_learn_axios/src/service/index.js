import axios from "axios";

class HYRequest{
  constructor(baseURL,timeout=10000){
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

request(config){
  return new Promise((resolve,reject)=>{
    this.instance.request(config).then(res=>{
      console.log("++++++++",res)
      resolve(res.data)
    }).catch(err=>{
      reject(err)
    })
  })
}
}
export default new HYRequest("http://123.207.32.32:9001")