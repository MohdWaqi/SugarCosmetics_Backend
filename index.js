require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connected = require('./config/db');
const productRouter = require('./routes/productRoutes');

connected()

const app = express()
app.use(cors())
const port = process.env.PORT;

app.use(productRouter)

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})