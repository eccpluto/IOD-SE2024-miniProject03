let minionModel = require('../models').minion;

let isMinionsPopulated = false;

let minionsEndpoints = {
    all: 'https://ffxivcollect.com/api/minions/'
}

const populateMinions = (res) => {
    console.log(`isMinionsPopulated: ${isMinionsPopulated}`);

    if (!isMinionsPopulated) {
        fetch(minionsEndpoints.all)
            .then(response => response.json())
            .then(json => {
                console.log('inserting many')
                minionModel.insertMany(json.results);
                res.send({ reuslt: 200, data: json })
            })
            .catch(err => res.send({ result: 500, error: err.message }));

        isMinionsPopulated = true;
    } else {
        res.send({ result: 200, message: 'Minions already populated.' })
    }
};

const getMinions = (req, res) => {
    console.log('[minionController] getting minions');
    minionModel.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log('[minionController] error getting minions');
            res.send({ result: 500, error: err.message })
        })
};

module.exports = {
    getMinions, populateMinions
}