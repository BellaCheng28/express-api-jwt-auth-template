// import mongoose from "mongoose";
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  hashedPassword: { type: String, required: true },

  
});
// models/user.js
// ... userSchema above
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword;
    }
});


const User = mongoose.model("User", userSchema);

module.exports = User;

