const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      //p配置路径别名
      // @对应的是src
      alias:{
        "utils":"@/utils"
      }
    }
  }
})
