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
    if (!isMinionsPopulated) {
        // ensure the collection is empty
        minionModel.deleteMany()
            .then(
                // try to pull down data from external api
                fetch(minionsEndpoints.all)
                    .then(response => response.json())
                    .then(json => {
                        console.log('[minionController] populating minions.');
                        res.send({ result: 200, data: json });
                        minionModel.insertMany(json.results)
                            // .then(insertedDocs => console.log(insertedDocs));

                        // set flag to indicate the collection now has entried from external api
                        isMinionsPopulated = true;
                    })
                    .catch(err => res.send({ result: 500, error: err.message }))
            );
    } else {
        console.log('[minionController] minions alreay populated.');
        res.send({ result: 200, message: 'Minions already populated.' })
    }
};

const getMinions = (req, res) => {
    console.log('[minionController] getting minions');
    minionModel.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
};

const createMinion = (req, res) => {
    console.log('[minionController] creating minion.');
    new minionModel(req.body).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        })
};

const updateMinion = (req, res) => {
    console.log(`[minionController] updating minion, id: ${req.params.id}`);
    minionModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(error => {
            console.log(error);
            res.send({ result: 500, error: error.message });
        })
}

const deleteMinion = (req, res) => {
    console.log(`[minionController] deleting minion, id: ${req.params.id}`);
    minionModel.findByIdAndDelete(req.params.id, req.body, {
        new: true
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        })
}

module.exports = {
    populateMinions, getMinions, createMinion, updateMinion, deleteMinion
    // , deleteAll
}