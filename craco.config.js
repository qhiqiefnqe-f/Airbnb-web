const path = require('path')
const resolve = pathName => path.resolve(__dirname, pathName)
const CracoLessPlugin = require('craco-less')

module.exports = {
  // 配置less
  plugins: [
    {
      plugin: CracoLessPlugin
    },
  ],

  // 配置webpack
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}