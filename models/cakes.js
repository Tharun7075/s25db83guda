const mongoose = require("mongoose")
const cakesSchema = mongoose.Schema({
name: String,
flavors: String,
price: Number
})
module.exports = mongoose.model("cakes",cakesSchema)