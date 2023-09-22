const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://technicaltest20230922110856.azurewebsites.net/',
      changeOrigin: true
    })
  )
}
