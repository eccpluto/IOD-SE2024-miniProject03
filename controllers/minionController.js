let minionModel = require('../models').minion;

const getMinions = (req, res) => {
    console.log('[minionController] getting minions');
    minionModel.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log('[minionController] error getting minions');
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getMinions
}