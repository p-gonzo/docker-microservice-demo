const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const axios = require('axios');

const PORT = process.env.port || 3001;

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello World'));

app.post('/hash', (req, res) => {
  axios.post(process.env.HASHING_SVC_URL, {password: req.body.password})
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      console.error(err);
      res.send(500);
    })
});

module.exports.app = app;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));