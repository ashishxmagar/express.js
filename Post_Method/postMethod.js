const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post('/submit', (req, res, next) => {
  console.log(req.body);
  res.send('THANK YOU FOR SUBMITTING');
})



app.listen(3000, () => {
  console.log('Server listening on port 3000.....');
})