const mongoose = require('mongoose');
// name, last buy sell volume baseunit 
const productSchema = new mongoose.Schema({
    product : {
        name : {
            type: String,
            required: true,
        },
        base_unit  : {
            type: String,
            required: true,
        },
        last  : {
            type: String,
            required: true,
        },
        buy  : {
            type: String,
            required: true,
        },
        sell  : {
            type: String,
            required: true,
        },
        volume  : {
            type: String,
            required: true,
        },
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;