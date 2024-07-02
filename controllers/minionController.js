const { minion } = require('../models');

let minionModel = require('../models').minion;

// flag so that the database only receives initial data once per session
let isMinionsPopulated = false;

// these are the api endpoints where our external minion data comes from
let minionsEndpoints = {
    all: 'https://ffxivcollect.com/api/minions/'
}

// fetches all minion data from the external api and populated the local minions collection
const populateMinions = (res) => {
    console.log(`isMinionsPopulated: ${isMinionsPopulated}`);

    if (!isMinionsPopulated) {
        // ensure the collection is empty
        minionModel.deleteMany()
            .then(
                // try to pull down data from external api
                fetch(minionsEndpoints.all)
                    .then(response => response.json())
                    .then(json => {
                        console.log('inserting many');
                        res.send({ result: 200, data: json });
                        minionModel.insertMany(json.results);

                        // set flag to indicate the collection now has entried from external api
                        isMinionsPopulated = true;
                    })
                    .catch(err => res.send({ result: 500, error: err.message }))
            );
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
    // , deleteAll
}