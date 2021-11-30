const express = require('express')
const request = require('request')

const app = express()

app.get('/', (req, res) => {
    request('https://random-word-api.herokuapp.com/word?number=1', (error, response, body) => {
        res.send(body)
    })
})

module.exports = app
