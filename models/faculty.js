const mongoose = require("mongoose")
const facultySchema = mongoose.Schema({
    Cust_Name: String,
    Cust_Age: String,
    Mail_Id: String
})
module.exports = mongoose.model("faculty",facultySchema)