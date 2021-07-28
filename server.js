const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

// MONGODB

dotenv.config();
const { MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful 💚'));

// PORT
const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} 🎉`);
});
