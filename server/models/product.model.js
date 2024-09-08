let mongoose = require("mongoose");

let productSchema = mongoose.Schema({
    frontimage: {
        type: String,
    },
    backimage: {
        type: String,
    },
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    stoke: {

    }
})