const Redis = require("ioredis");
require('dotenv').config()

const PORT = process.env.PORT || 5000;

const redis = new Redis({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || 'Mjn1KpSZ9fHgbYjGxoxTPudLW4WTbyuV'
});

module.exports = {
    PORT,
    redis
}