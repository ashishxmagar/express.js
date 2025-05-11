//Understanding the next('route')


const express = require('express');
const app = express();

app.use('/hello', (req, res, next) => {
  console.log('Hello World');
  next('route');
})

/*
These two code block will completly be ignored because next('route') skips all the middleware

app.use('hello', (req, res, next) => {
  console.log('Test 1...');
})

app.use('/hello', (req, res, next) => {
  console.log('Test 2...');
})
*/
//In this situation this will be called 
app.get('/hello', (req, res, next) => {
  console.log('Response 1...');
  res.send('Hello 1');
})


//This will not be called
app.get('/hello', (req, res, next) => {
  console.log('Response 2...')
  res.send('Hello 2');
})


app.listen(3000, () => {
  console.log('Server listening on port 3000.....');
})