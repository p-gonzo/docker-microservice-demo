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
  axios.post(process.env.HASHING_SVC_URI, {password: req.body.password})
    .then((data) => {
      res.send(data);
    })
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
