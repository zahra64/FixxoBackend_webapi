const mongoose = require('mongoose')

mongoose.set ('strictQuery', false)
const initMongoDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDB is running at ${conn.connection.host}`)
}

module.exports = initMongoDB