const cron = require('node-cron');
const { cronMinutes } = require('./constant');
const axios = require('axios');

// cron.schedule(cronMinutes.EVERY_10_MINUTE, async function () {
//
// })

// async function getUser() {
//     try {
//         const getData = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=TRX,BTC&convert=USD,INR', {
//             headers: {
//                 'X-CMC_PRO_API_KEY': '9ecc1c35-2d01-4c0c-affa-08e4577acd44'
//             }
//         })
//         // getData.data.data.forEach((el, i) => {
//         //     console.log(el)
//         //     console.log(i)
//         //     console.log(getData.data.data.length)
//         // })
//         let fullData = {};
//         let arr = [];
//         // for (const property in getData.data.data) {
//         //     for (const currency in getData.data.data[`${property}`].quote) {
//         //         arr.push(currency)
//         //     }
//         //     fullData[`${property}`] = arr;
//         // }
//         console.log(getData.data.data.quote)
//
//        console.log(fullData)
//         return getData;
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// getUser()