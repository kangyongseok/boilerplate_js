const express = require('express');
const app = express();
const port = 5000;

app.use(express.static(__dirname))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/test', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => { console.log(`server start PORT: ${port}`) })