const app = require('./app');

// MONGODB
const dotenv = require('dotenv');

dotenv.config();
const { MONGODB_URI } = process.env;

const mongoose = require('mongoose');

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
