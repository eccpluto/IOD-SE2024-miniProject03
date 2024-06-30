let express = require('express');
let Router = express.Router();

// TODO add controller and CRUD calls
console.log('entered minion router');

Router.get('/', (req, res) => {
    console.log('getting the minions');
})

module.exports = Router;