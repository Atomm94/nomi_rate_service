const cron = require('node-cron');
const { cronMinutes, coins, currencies } = require('./utils/constant');
const axios = require('axios');
const { cacheWithRedis } = require('./cache');
const logger = require('./utils/logger')

cron.schedule(cronMinutes.EVERY_MINUTE, async function () {
    try {
        let coinsToString = coins.toString();
        let currenciesToString = currencies.toString();

        const getData = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coinsToString}&convert=${currenciesToString}`, {
            headers: {
                'X-CMC_PRO_API_KEY': '9ecc1c35-2d01-4c0c-affa-08e4577acd44'
            }
        })

        let coinData = Object.values(getData.data.data);
        let finishData = [];
        let key;
        let value;
        coinData.map(async item => {
            for(const currency in item.quote) {
                key = `${item.symbol}-${currency}`
                value = item.quote[currency].price
                await cacheWithRedis(key, value)
                finishData.push(`${key}: ${value}`)
            }
        })
        logger.info('coin data set in redis...');
        return finishData;
    } catch (error) {
        logger.error('cron watching error ...' + error);
    }
})
