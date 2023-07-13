const mongoose = require("mongoose")
const JWT = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
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
            { id: this.id, email: this.email },
            process.env.SECRET,
            { expiresIn: '7d' }
        )
    }
}

module.exports = mongoose.model("User", userSchema)