const express = require("express")
require('dotenv').config()
const dbConfig = require("./config/db.config")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const userRoute = require("./routes/user.routes")
const cors = require("cors")
const PORT = process.env.PORT || 5000


const app = express()
app.use(bodyParser.json())
app.use(cookieParser())

app.use("/", userRoute)

app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}))

dbConfig()

app.listen(PORT, () => {
    console.log("server is running at port no: " + PORT)
})