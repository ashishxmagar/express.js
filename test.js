const express = require('express');
const app = express();

app.get('/query', (req, res, next) => {
  console.log('Response 1');
  next('route');
})

app.get('/query', (req, res, next) => {
  console.log('Response 2');
  res.send('Hello 2');
})


app.get('/query', (req, res) => {
  res.send('Hello 3');
})


app.listen(3000, () => {
  console.log('Server listening on port 3000.....');
})