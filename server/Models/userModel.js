const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type: String, require: true, minlegth: 3, maxlegth: 30 },
    email: {type: String, require: true, minlegth: 3, maxlegth: 200, unique: true},
    password: {type: String, require: true, minlegth: 3, maxlegth: 1024},
},{
    timestamp: true,
});

const userModel = mongoose.model("User", userSchema)

module.exports = userModel;