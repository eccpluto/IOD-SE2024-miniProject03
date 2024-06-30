const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skill_typeSchema = new Schema({
    id: { type: Number, trim: true, required: true, unique: true },
    name: { type: String, trim: true, required: true },
});

module.exports = mongoose.model("skill_type", skill_typeSchema);