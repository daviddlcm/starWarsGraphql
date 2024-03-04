import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: new Date()
    },
    updated_at:{
        type: Date,
        default: null
    },
    deleted: {
        type: Boolean,
        default: false,
        required: false
    },
    deleted_at:{
        type: Date,
        default: null
    },
    webHokes:{
        type:Array,
       default:[]
    }
})

export const User = mongoose.model('User',UserSchema)