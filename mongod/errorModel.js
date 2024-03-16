const mongoose = require("mongoose")
let Schema = mongoose.Schema;
const errorScheme = new Schema({

    date: Date,

    text: String,

    code: Number,

    route: String,

});
const Error = mongoose.model("Error", errorScheme);
console.log("Error scheme was created")

module.exports = Error;