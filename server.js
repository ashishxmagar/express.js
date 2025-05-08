const express = require('express');
const app = express();

app.get('/query', (req, res, next) => {
  console.log('Response 1');
  next('route');
})

app.get('/query', (req, res, next) => {
  console.log('Response 2');
  res.json({name: 'Ashish', surname:'Thapa Magar', profession:'Developer'});
})


app.listen(3000, () => {
  console.log('Server listening on port 3000.....');
})