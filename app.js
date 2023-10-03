'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('<div style="margin: 30px auto; widht: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1>Congratulations</h1><h4>You have successfully implemented the web server :)</h4></div>')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
