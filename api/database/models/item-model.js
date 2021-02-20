const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: false },
    description: { type: String, required: false },
    price: { type: Number, required: false }
},
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;