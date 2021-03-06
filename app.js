// EXPRESS CONFIG
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
// SESSIONS
const session = require('express-session');
// EXTRA INSTALL
const morgan = require('morgan');
const path = require('path');

// ROUTERS
const categoryRouter = require('./routes/categoryRoute');
const restaurantRouter = require('./routes/restaurantRoute');
const menuItemRouter = require('./routes/menuItemRoute');
const ordersRouter = require('./routes/ordersRoute');
const reviewRouter = require('./routes/reviewRoute');

const searchRouter = require('./routes/searchRoute')
const adsRouter = require('./routes/adsRoute');
const userRouter = require('./routes/userRoute');
const loginRouter = require('./routes/loginRoute');
const errorHandler = require('./utils/errorHandler');
const BaseError = require('./utils/BaseError');
const httpStatusCodes = require('./utils/httpStatusCodes');

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/restaurants', restaurantRouter);
app.use('/api/v1/menu-items', menuItemRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/ads', adsRouter);

app.use('/api/v1/search', searchRouter);
app.use('/user/signin', loginRouter);
app.use(express.static(path.join(__dirname, './client/build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});
app.all('*', (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on this server`);

  next(new BaseError(error.name, httpStatusCodes.NOT_FOUND, error.message));
});

app.use(errorHandler);

module.exports = app;
