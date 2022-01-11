const cronMinutes = {
    EVERY_10_MINUTE: '*/10 * * * *',
    EVERY_HOUR: '0 * * * *',
    ONCE_EVERY_DAY: '0 0 * * *',
    EVERY_MINUTE: '* * * * *'
}

const coins = ['TRX', 'BTC', 'ETH', 'XRP'];
const currencies = ['USD', 'EUR', 'INR', 'GBP'];

module.exports = {
    cronMinutes,
    coins,
    currencies
};