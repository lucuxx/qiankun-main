module.exports = {
  transpileDependencies: ['common'],
  chainWebpack: config => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = 'qiankun-example'
        return args
      })
  },
  devServer: {
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        // target: 'http://47.106.237.64/api/',
        target: 'http://localhost:3001/api/',

        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
