let express = require('express');
let Router = express.Router();
let minionController = require('../controllers').minionController;

// TODO add controller and CRUD calls

Router.get('/', (req, res) => {
    console.log('[minionRoutes] delegating get call.');
    minionController.getMinions(req, res);
})

module.exports = Router;