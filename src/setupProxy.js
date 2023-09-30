const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://www.18985.com',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }))
}