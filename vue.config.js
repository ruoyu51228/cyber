const path = require('path')

function resolve(dir){
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    disableHostCheck: false,
    host: 'localhost',
    port: 8080
  },
  chainWebpack(config){
    config.resolve.alias
      .set('@components', resolve('src/components'))
      .set('@plugin', resolve('src/plugin'))
      .set('@utils', resolve('src/utils'))
      .set('@assets', resolve('src/assets'))
      .set('@scripts', resolve('src/scripts'))
  }
}