const mongoose = require('mongoose');
const slugify = require('slugify');

const restaurantSchema = new mongoose.Schema(
  {
    kor_name: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'Restaurant must have a name'],
    },
    slug: String,
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
      address: {
        type: String,
        required: [true, 'Restaurant must have an address'],
      },
      postal_code: {
        type: String,
        required: [true, 'Restarant must have a postal code'],
      },
    },
    ratingAverage: {
      type: Number,
      default: 0,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    discount_rate: {
      type: Number,
    },
    preparation_time: {
      type: Number,
      default: 25,
    },
    image_cover: {
      type: String,
      required: [true, 'Restaurant must have an image cover'],
    },
    summary: {
      type: String,
      trim: true,
    },
    delivery_fee: {
      type: Number,
      required: [true, 'Restaurant must have delivery_fee!'],
    },
  },
  { toJSON: { virtuals: true } },
  { toObject: { virtuals: true } }
);

restaurantSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

restaurantSchema.pre(/^find/, function (next) {
  this.select('-__v');
  next();
});

restaurantSchema.virtual('menuItems', {
  ref: 'MenuItem', // The model to use
  localField: '_id', // local feild, like a FOREIGN KEY
  foreignField: 'restaurant_id',
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
