require('dotenv').config()
const express = require('express');
const connected = require('./config/db');
const productRouter = require('./routes/productRoutes');

connected()

const app = express()
const port = process.env.PORT;

app.use(productRouter)

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})