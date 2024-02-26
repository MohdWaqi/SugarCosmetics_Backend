const mongoose = require('mongoose');

const BagSchema = new mongoose.Schema({
    item:{type :mongoose.Schema.Types.ObjectId, ref: "product"},
    quantity:Number
})

const Bag = mongoose.model("bag", BagSchema);

module.exports = Bag