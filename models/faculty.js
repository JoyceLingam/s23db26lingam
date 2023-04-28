const mongoose = require("mongoose");
const facultySchema = mongoose.Schema({
  Cust_Name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, "Name of the faculty is not valid"],
  },
  Cust_Age: {
    type: Number,
    required: true,
    minL: 1,
    max: 100
  },
  Mail_Id: {
    type: String,
    required: true,
    min: [10, "Mail Id of the faculty is not valid"],
  },
});
module.exports = mongoose.model("faculty", facultySchema);