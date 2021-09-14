const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', function (req, res) {
  res.send('Hello World!');
});

function handelListen() {
  console.log(`Server Start ${PORT}`)
}

app.listen(PORT, handelListen);

