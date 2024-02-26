const mongoose = require('mongoose');

const BagSchema = new mongoose.Schema({
    items:[{type :mongoose.Schema.Types.ObjectId, ref: "product"}]
})

const Bag = mongoose.model("bag", BagSchema);

module.exports = Bag