const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Review must have an user_id'],
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: [true, 'Review must have restaurant_id'],
    },
    rating: { type: Number },
    review: {
      type: String,
      required: [true, 'Review must have content!'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { toJSON: { virtuals: true } },
  { toObject: { virtuals: true } },

  { id: false }
).set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret.id;
  },
});

const Review = mongoose.model('Reviewe', reviewSchema);

module.exports = Review;
