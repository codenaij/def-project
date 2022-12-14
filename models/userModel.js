const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true, select: false },

    userId: { type: String, unique: true },

    role: { type: String, default: 'user', enum: ['user', 'root'] },

    resetToken: { type: String },

    expireToken: { type: Date },

    referredBy: { type: String },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
