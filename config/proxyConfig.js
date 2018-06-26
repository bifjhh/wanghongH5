module.exports = {
  proxy: {
    '/api': {   
      target: '',  // 接口域名
      changeOrigin: false,  //是否跨域
      pathRewrite: {
        '^/api': ''   //需要rewrite的,
      }
    }
  }
}