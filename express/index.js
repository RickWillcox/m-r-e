const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASS, MONGO_IP, MONGO_PORT } = require('./config/config');

const app = express();

mongoose
    .connect(`mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`) //mongo is replaced by IP as custom networks can talk to each other by name
    .then(() => {
        console.log('successfully connected to mongo db!');
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/', (req, res) => {
    res.send('<h2> Hello Worl1d!</h2>');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
