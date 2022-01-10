require('dotenv').config({path: '../.env'})

const PORT = process.env.PORT || 5000;

console.log(process.env.PORT)

module.exports = {
    PORT
}