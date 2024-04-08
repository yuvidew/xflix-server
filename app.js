require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router/router')
const {connectDb} = require('./db/connect')
const port = 2000

/**they are same middleware */

app.use(express.json())
app.use(cors())

app.use('/v1' , router)

const start = async () => {
    try {
        await connectDb(process.env.MDB_URL)
        app.listen(port , () => {
            console.log(`Server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()