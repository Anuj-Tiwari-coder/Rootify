import mongoose from "mongoose";




const userSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    image: { type: String, require: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // phone_number: { type: Number, required: true, unique: true },
    cartItem: { type: Object, default: {} }
}, { minimize: false });

const User = mongoose.model.User || mongoose.model('User', userSchema);
module.exports = User;
