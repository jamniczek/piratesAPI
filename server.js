const express = require('express');
const mongoose = require('mongoose');
const { Pirates } = require('./models/pirates');
const keys = require('./config/keys');
// const Pirates = mongoose.model('pirates');

const app = express();
const PORT = process.env.PORT || 3000;
const db = mongoose.connection;


mongoose.connect(keys.mongoURI);

app.get('/pirates', (req, res) => {
    Pirates.findById('5abbc446977bcd2698912888')
    .then(doc => {
        console.log(doc)
        res.send(doc.crew)
    }).catch(err => {
        res.send(err)
    });
});



app.listen(PORT, () => {
    console.log('up and running')
});