// EXPRESS CONFIG
const express = require('express');
const cors = require('cors');

// EXTRA INSTALL
const morgan = require('morgan');

// ROUTERS
const categoryRouter = require('./routes/categoryRoute');
const restaurantRouter = require('./routes/restaurantRoute');

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// app.get('/', (req, res) => {
//   res.send('hi');
// });

// Routes
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/restaurants', restaurantRouter);

app.all('*', (req, res) =>
  res
    .status(404)
    .json({ error: `Can't find ${req.originalUrl} on this server` })
);

module.exports = app;
