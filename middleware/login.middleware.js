module.exports = loginMiddleware = (req, res, next) => {
    const { email, password } = req.body
    const token = (req.cookies && req.cookies.token) || null
    if (token) {
        return res.status(404).json({ message: "User is already loged in. Please logout" })
    }
    else if (email && password) {
        next()
    }
    else {
        return res.status(404).json({ message: "Please fill all fields" })
    }
}