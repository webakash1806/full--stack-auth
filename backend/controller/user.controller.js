const User = require("../model/user.model")
const bcrypt = require("bcrypt")
const emailValidator = require("email-validator")

module.exports.register = async (req, res) => {
    const { userName, name, email, bio, password, confirmPassword } = req.body
    // console.log(req.body)

    const uniqueUser = await User.findOne({ userName })
    if (uniqueUser) {
        return res.status(404).json({ message: "User name is already taken" })
    }

    const emailValidate = emailValidator.validate(email)
    if (!emailValidate) {
        return res.status(404).json({ message: "Please input Valid email" })
    }

    const uniqueEmail = await User.findOne({ email })
    if (uniqueEmail) {
        return res.status(404).json({ message: "User is already Registered try to login" })
    }

    try {
        const hashPassword = await bcrypt.hash(password, 8)
        const conhashPassword = await bcrypt.hash(confirmPassword, 8)
        const user = new User({ userName, name, email, bio, password: hashPassword, confirmPassword: conhashPassword })
        if (password === confirmPassword) {
            const userData = await user.save()
            res.status(200).json({ status: "Registered Successfully", Data: userData })
        }
        else {
            return res.status(404).json({ message: "Password and Confirm Password is not same" })
        }
    }
    catch (e) {
        return res.status(500).json({ status: false, message: e.message })
    }
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body

    const uniqueEmail = await User.findOne({ email })
    if (!uniqueEmail) {
        return res.status(404).json({ message: "This email is not registered. Try to register" })
    }

    try {
        const passwordCheck = await bcrypt.compare(password, uniqueEmail.password)
        if (!passwordCheck) {
            return res.status(404).json({ message: "Incorrect Password" })
        }
        else {
            const token = uniqueEmail.jwtToken()
            const cookieOption = {
                expiresIn: 2 * 60 * 60 * 1000,
                httpOnly: true
            }

            res.cookie("token", token, cookieOption)

            res.status(200).json({ message: `Welcome ${uniqueEmail.name}! Login Successfull` })
        }
    }
    catch (e) {
        return res.status(500).json({ message: e.message })
    }
}

module.exports.getUser = async (req, res) => {
    const uniqueId = req.userDetail.id

    try {
        const userData = await User.findById(uniqueId)
        res.status(200).json({ status: true, Detail: userData })
    }
    catch (e) {
        return res.status(500).json({ message: e.message })
    }
}

module.exports.logout = (req, res) => {
    const token = ""
    const cookiesOption = { logoutAt: new Date(), httpOnly: true }

    try {
        res.cookie("token", token, cookiesOption)
        res.status(200).json({ status: true, message: "Logged out" })
    }
    catch (e) {
        return res.status(500).json({ status: false, message: e.message })
    }
}