const mongoose = require("mongoose")
const JWT = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    bio: {
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true
    }
}, { timestamps: true })

userSchema.methods = {
    jwtToken() {
        return JWT.sign(
            { id: this._id, email: this.email },
            process.env.SECRET,
            { expiresIn: '7d' }
        )
    }
}

module.exports = mongoose.model("User", userSchema)