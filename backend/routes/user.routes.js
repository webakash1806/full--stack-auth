const express = require("express")
const { register, login, getUser, logout } = require("../controller/user.controller")
const registerMiddleware = require("../middleware/register.middleware")
const loginMiddleware = require("../middleware/login.middleware")
const getUserMiddleware = require("../middleware/getUser.middleware")

const userRoute = express.Router()

userRoute.post("/register", registerMiddleware, register)

userRoute.post("/login", loginMiddleware, login)

userRoute.get("/user", getUserMiddleware, getUser)

userRoute.get("/logout", getUserMiddleware, logout)


module.exports = userRoute