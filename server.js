import express from 'express'
import dotenv from 'dotenv/config'
import myDateTime from './date.js'
import getURL from './getURL.js'
import viewEngine from './viewEngine.js'

const app = express()
viewEngine(app)
const port = process.env.port

app.get('/', (req, res) => {
    res.send('Hello TruonqDat!!')
})

app.get('/about', (req, res) => {
    res.send('This page about!!')
}) 

app.get('/date', (req, res) => {
    res.send(myDateTime())
}) 

app.get('/geturl', (req, res) => {
    res.send(getURL.getPath(req) + "<br>" + getURL.getParamsURL(req))
}) 

app.get('/ejs', (req, res) => {
    res.render('test')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})