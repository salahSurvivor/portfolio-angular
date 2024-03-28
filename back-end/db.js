const mongoose = require('mongoose');

const Mongoose = mongoose.connect('mongodb://127.0.0.1:27017/portfolios')
    .then(() => console.log('Connected To Mongodb'))
    .catch((err) => console.log(err.message))

module.exports = Mongoose;