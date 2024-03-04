import mongoose from "mongoose";

const AlienRaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    ,planet: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    id_user: {
        type: String,
        required: true
    }
})

export const AlienRace = mongoose.model('AlienRace',AlienRaceSchema)