const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.write('Hello World');
})


app.listen(3000, () => {
  console.log('Server listening at port 3000....');
})