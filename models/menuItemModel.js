const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  category_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Category',
  },
  kor_name: {
    type: String,
  },
  name: {
    type: String,
    required: [true, 'Menu Item must have its name'],
  },
  restaurant_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Restaurant',
  },
  tags: [String],
  price: {
    type: Number,
    required: [true, 'Menu Item must have a price'],
  },
  item_img: {
    type: String,
    required: [true, 'Menu Item must have image'],
  },
  description: {
    type: String,
  },
}).set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret.id;
  },
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
