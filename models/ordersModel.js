const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Order must have an user_id'],
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: [true, 'Order must have restaurant_id'],
    },
    orders: [
      {
        item: {
          type: mongoose.Types.ObjectId,
          ref: 'MenuItem',
        },
        quantity: Number,
      },
    ],
    orderedAt: {
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

ordersSchema.virtual("review", {
  ref : 'Review',
  localField : '_id',
  foreignField : 'orders',
})
const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;
