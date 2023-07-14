const JWT = require("jsonwebtoken")

module.exports = getUserMiddleware = async (req, res, next) => {
    const token = (req.cookies && req.cookies.token)
    console.log(token)
    if (!token) {
        return res.status(404).json({ message: "Login Again" })
    }


    const tokenVerify = await JWT.verify(token, process.env.SECRET)
    req.userDetail = { id: tokenVerify.id, email: tokenVerify.email }
    next()



}