import mongoose from "mongoose";

const PlanetSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    galaxy:{
        type:String,
        required:true
    }
})

export const Planet = mongoose.model('Planet',PlanetSchema)