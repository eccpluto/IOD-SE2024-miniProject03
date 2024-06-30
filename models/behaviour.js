const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const behaviourSchema = new Schema({
    id: { type: Number, trim: true, required: true, unique: true },
    name: { type: String, trim: true, required: true },
});

module.exports = mongoose.model("behaviour", behaviourSchema);