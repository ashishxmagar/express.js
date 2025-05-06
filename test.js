const express = require('express');
const app = express();

app.get('/query', (req, res) => {
  console.log(req.query)
  res.send('Hello World');
})


app.listen(3000, () => {
  console.log('Server listening on port 3000.....');
})