const mongoose = require('mongoose');
const mongodb_uri = process.env.MONGODB_URI;

// Set mongoose promise library
mongoose.Promise = global.Promise;

mongoose.connect(mongodb_uri);

module.exports = { mongoose };
