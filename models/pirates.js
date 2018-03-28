const mongoose = require('mongoose');

let piratesSchema = mongoose.Schema({
    crew: []
});

let Pirates = mongoose.model('Pirates', piratesSchema);

module.exports = {
    Pirates
}