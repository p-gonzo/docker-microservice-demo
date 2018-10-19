const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.port || 3002;

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

const reverseString = (string) => {
  return string.split('').reverse().join('');
}

app.post('/', (req, res) => {
  res.send(reverseString(req.body.password));
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))