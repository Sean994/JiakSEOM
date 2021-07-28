const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//const MenuItem = require('../../models/menuItemModel');
//const Restaurant = require('../../models/restaurantModel');
const Category = require('../../models/categoryModel');

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

const menuItems = JSON.parse(
  fs.readFileSync(`${__dirname}/menu_item.json`, 'utf-8')
);

// const restaurants = JSON.parse(
//   fs.readFileSync(`${__dirname}/restaurants.json`, 'utf-8')
// );

const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/category.json`, 'utf-8')
);

const importData = async () => {
  try {
    //await MenuItem.create(menuItems);
    //await Restaurant.create(restaurants);
    await Category.create(categories);
    console.log('Data successfully loaded');
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    //await MenuItem.deleteMany();
    //await Restaurant.deleteMany();
    await Category.deleteMany();
    console.log('Data successfully deleted');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === '--import') {
  importData();
  //MenuItem.create(menuItems[0]);
} else if (process.argv[2] === '--delete') {
  deleteData();
} else if (process.argv[2] === '--log') {
  console.log(menuItems);
}
