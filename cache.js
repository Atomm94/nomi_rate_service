const Redis = require('ioredis');
const config = require('./utils/config');
const {redis} = require("./utils/config");

const cacheWithRedis = async (key, value) => {
    const set = config.redis.set(key, value)
};

const getFromRedis = async (req, res) => {
    const { key } = req.query;
    const get = await config.redis.get(key);
    res.status(200).json(`${key}: ${get}`)
}

module.exports = {
    cacheWithRedis,
    getFromRedis
};