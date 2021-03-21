require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/total_supply', (req, res) => {
    res.send(500000000);
})

app.get('/circulating_supply', (req, res) => {
    res.send(323000000);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})