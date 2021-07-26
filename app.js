// EXPRESS CONFIG
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
// SESSIONS
const session = require('express-session')
// EXTRA INSTALL
const morgan = require('morgan');

// ROUTERS
const categoryRouter = require('./routes/categoryRoute');
const restaurantRouter = require('./routes/restaurantRoute');
const menuItemRouter = require('./routes/menuItemRoute');

const userRouter = require('./routes/userRoute')
const loginRouter = require('./routes/loginRoute')
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(session({
  secret : process.env.SECRET,
  resave : false,
  saveUninitialized : false,
}))

// Routes
app.use('/api/v1/user', userRouter)
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/restaurants', restaurantRouter);
app.use('/api/v1/menu-items', menuItemRouter);

app.use('/user/signin', loginRouter)
app.all('*', (req, res) =>
  res
    .status(404)
    .json({ error: `Can't find ${req.originalUrl} on this server` })
);

module.exports = app;
