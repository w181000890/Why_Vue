export default{
  data() {
    return {
      message: "hello vue"
    }
  },
  created() {
    console.log("created", this.message)
  }
}