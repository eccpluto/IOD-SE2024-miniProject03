let express = require('express');
let Router = express.Router();
let minionController = require('../controllers').minionController;

// TODO add controller and CRUD calls

// return all minions from local api
Router.get('/', (req, res) => {
    console.log('[minionRoutes] delegating get http method to getMinions.');
    minionController.getMinions(req, res);
})

// add a new minion
Router.post('/create', (req, res) => {
    console.log('[minionRouter] delegating post http method to createMinion.');
    minionController.createMinion(req, res);
})

// todo
// update a minion
Router.put('/:id', (req, res) => {
    console.log('[minionRouter] delegating put http method to updateMinion.');
    minionController.updateMinion(req, res);
})

// todo
// delete a specific minion
Router.delete('/:id', (req, res) => {
    console.log('[minionRouter] delegating delete http method to deleteMinion.')
})


module.exports = Router;