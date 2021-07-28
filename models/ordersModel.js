const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({});

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;
