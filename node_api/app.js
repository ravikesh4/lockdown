const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const User = require('./model/user') 

const port = process.env.PORT


mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true, useUnifiedTopology: true }, (req, res) => {
    console.log("database is connected");
    
})

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/create', async (req, res) => {
    try {
        const myUser = new User(req.body);
        await myUser.save();
        res.send(req.body)

    } catch (err) {
        res.send({message: err} )
    }

})

app.listen(port, () => console.log(`Node API app listening on port ${port}!`))