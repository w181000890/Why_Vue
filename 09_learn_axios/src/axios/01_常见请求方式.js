axios.request({
  url: "http://123.207.32.32:8000/home/multidata"
}).then(res => {
  console.log("res", res.data)
})