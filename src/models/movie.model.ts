import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    release_date:{
        type: Date,
        required: true
    },
    language:{
        type: String,
        required: true
    }
})

export const Movie = mongoose.model('Movie',MovieSchema)