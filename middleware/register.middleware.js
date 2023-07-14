module.exports = registerMiddleware = (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body
    if (name && email && password && confirmPassword) {
        next()
    }
    else {
        return res.status(404).json({ message: "Please Fill all fields" })
    }
}