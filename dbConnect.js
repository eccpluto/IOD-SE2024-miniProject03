'use strict'
const mongoose = require('mongoose');

const uri = process.env.DB_URI || 'mongodb://127.0.0.1/miniproject3db';

mongoose.connect(uri)
    .then(() => console.log('MongoDB connedted.'))
    .catch((err) => console.log(`MongoDB failed to connect: ${err.message}`));

const dbConn = mongoose.connection;

dbConn.on('error', console.error.bind(console, 'MongoDB connection error.'));

exports.mongoose = mongoose;