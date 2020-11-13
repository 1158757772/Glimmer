module.exports = {
  devServer: {
    proxy: {
      '/cgi-bin': {
        target: 'https://ssl.gongyi.qq.com',
        changeOrigin: true

      }

    }
  },
  lintOnSave: true
}
