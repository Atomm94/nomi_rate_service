const express = require("express");
const axios = require("axios");
const redis = require('redis');
const cache = require('./cache');
const app = express();
const fs = require('fs');

//log error to the console if any occurs
// client.on("error", (err) => {
//     console.log(err);
// });
//
//
// app.get("/jobs", async (req, res) => {
//     try {
//         client.get(async (err, jobs) => {
//             if (err) throw err;
//
//             if (jobs) {
//                 res.status(200).send({
//                     jobs: JSON.parse(jobs),
//                     message: "data retrieved from the cache"
//                 });
//             } else {
//                 const jobs = await axios.get(`https://gist.githubusercontent.com/rominirani/8235702/raw/a50f7c449c41b6dc8eb87d8d393eeff62121b392/employees.json`);
//                 client.setex(jobs, 600, JSON.stringify(jobs.data));
//                 res.status(200).send({
//                     jobs: jobs.data,
//                     message: "cache miss"
//                 });
//             }
//         });
//     } catch(err) {
//         res.status(500).send({message: err.message});
//     }
// });

// const client = redis.createClient({
//     host:'localhost',
//     port:6379,
//         tls: {
//             key: fs.readFileSync('path_to_keyfile', encoding='ascii'),
//             cert: fs.readFileSync('path_to_certfile', encoding='ascii'),
//             ca: [ fs.readFileSync('path_to_ca_certfile', encoding='ascii') ]
//     }
// });
//
//
// client.set('foo', 'bar', (err, reply) => {
//     if (err) throw err;
//     console.log(reply);
//
//     client.get('foo', (err, reply) => {
//         if (err) throw err;
//         console.log(reply);
//     });
// });

app.get('/redis', cache);

app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started");
});