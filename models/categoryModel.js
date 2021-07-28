const mongoose = require('mongoose');
const slugify = require('slugify');

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: [true, 'Category must have a name'],
    trim: true,
  },
  slug: {
    type: String,
  },
  img_cover: {
    type: String,
  },
});

categorySchema.pre('save', function (next) {
  this.slug = slugify(this.category_name, { lower: true });
  next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
