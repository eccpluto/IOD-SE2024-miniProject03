const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const minionSchema = new Schema({
    // id is number of entities in collection-1, would be good to auto-index this,
    // otherwise just use default ObjectId string for local commits to MongoDB 
    id: { type: Number, trim: true, required: true, unique: true },
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true },
    enhanced_description: { type: String, trim: true },
    toolTip: { type: String },
    patch: { type: String },
    // can be null?
    item_id: { type: Number },
    tradeable: { type: Boolean },
    // should be a FK to behaviours collection
    behaviour: { type: mongoose.Schema.Types.ObjectId, ref: 'behaviour' },
    // should be a FK to races collection
    race: { type: mongoose.Schema.Types.ObjectId, ref: 'races' },
    image: { type: String },
    icon: { type: String },
    owned: { type: String },
    // array of FKs to different sources
    sources: { type: Array },
    // there is a skill_type in here that should be a FK to the skill_types collection
    verminion: {
        cost: { type: Number },
        attack: { type: Number },
        defense: { type: Number },
        hp: { type: Number },
        speed: { type: Number },
        area_attack: { type: Boolean },
        skill: { type: String },
        skill_description: { type: String },
        skill_angle: { type: Number },
        skill_cost: { type: Number },
        eye: { type: Boolean },
        gate: { type: Boolean },
        shield: { type: Boolean },
        // FK to skill type collection
        skill_type: { type: mongoose.Schema.Types.ObjectId, ref: 'skill_type' },
    },
});

module.exports = mongoose.model("minion", minionSchema);