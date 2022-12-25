require('dotenv').config()
const cors = require('cors')
const port = process.env.API_PORT || 9999
const initMongoDB = require('./server-mongodb')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// middleware :(system- middleware app)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded ({ extended: false })) // can be false also
app.use(bodyParser.json())

// routes/controllers
app.use('/api/products', require('./controllers/productsController'))


// initialize
initMongoDB()
app.listen(port, () => console.log(`Web Api is running on http://localhost:${port}`))



