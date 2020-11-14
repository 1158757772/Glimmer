module.exports = {
  devServer: {
    proxy: {
      '/cgi-bin': {
        target: 'https://ssl.gongyi.qq.com',
        changeOrigin: true
      },
      '/kerwin': {
        target: 'https://h5.ele.me',
        changeOrigin: true,
        pathRewrite: {
          '^/kerwin': '' // 路径重写
        }
      },
      //
      '/json_data': {
        target: 'https://scdn.gongyi.qq.com',
        changeOrigin: true
      }

    }
  },
  lintOnSave: false
}
