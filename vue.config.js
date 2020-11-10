module.exports = {
  devServer: {
    proxy: {
      '/tiechui': {
        target: 'https://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/tiechui': ''
        }
      },
      '/kerwin': {
        target: 'https://h5.ele.me',
        changeOrigin: true,
        pathRewrite: {
          '^/kerwin': '' // 路径重写
        }
      }
    }
  },
  lintOnSave: true
}
