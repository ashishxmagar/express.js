const express = require('express');
const app = express();


app.use('/', (req, res, next) => {
  console.log('User hit the request');
  res.send('Thank you for your Request...');
})




app.listen(3000, () => {
  console.log('Server listening on port 3000.....');
})