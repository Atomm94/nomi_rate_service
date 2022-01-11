const express = require('express')
const app = express()
const cron = require('./cron');
const { getFromRedis } = require('./cache');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/dataFromRedis', getFromRedis);

module.exports = app;