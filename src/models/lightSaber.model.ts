import mongoose from "mongoose";

const LightSaberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
})

export const LighSaber = mongoose.model('LighSaber',LightSaberSchema)