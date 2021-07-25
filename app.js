// EXPRESS CONFIG
const express = require('express');
const cors = require('cors');

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('hi');
});

module.exports = app;
