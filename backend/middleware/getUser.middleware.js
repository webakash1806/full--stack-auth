const JWT = require("jsonwebtoken")

module.exports = getUserMiddleware = async (req, res, next) => {
    const token = (req.cookies && req.cookies.token) || null
    console.log(token)
    if (!token) {
        return res.status(404).json({ message: "Login Again" })
    }

    try {
        const tokenVerify = await JWT.verify(token, process.env.SECRET)
        req.userDetail = { id: tokenVerify.id, email: tokenVerify.email }
    }
    catch (e) {
        return res.status(500).json({ message: e.message })
    }

    next()
}