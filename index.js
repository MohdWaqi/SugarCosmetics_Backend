require('dotenv').config()
const express = require('express');
const connected = require('./config/db');

connected()

const app = express()
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})