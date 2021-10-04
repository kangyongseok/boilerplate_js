module.exports = function (app) {
  app.get('/test', (req, res) => {
    console.log('test')
  })
}