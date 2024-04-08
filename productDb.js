require('dotenv').config()
const {connectDb} = require('./db/connect')
const Product = require('./model/api.schema')
const proJson = require('./product.json')

const start = async() =>{
    try {
        await connectDb(process.env.MDB_URL)
        await Product.create(proJson)
        console.log('added Successfully');
    } catch (error) {
        console.log(error);
    }
}

start()