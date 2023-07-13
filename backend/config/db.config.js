const mongoose = require("mongoose")
const db_url = "mongodb://127.0.0.1/jwt-auth-practice"


const dbConnection = () => {
    mongoose.connect(db_url)
        .then((conn) => { console.log(`DataBase is connected with ${conn.connection.host}`) })
        .catch((e) => { console.log(e.message) })
}

module.exports = dbConnection
