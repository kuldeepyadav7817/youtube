import mongoose,{Schema} from "mongoose";

const VideoSchema = new Schema({
    VideoFile:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    thumbnail:{
        type: String,
        required: true,
    },
    Owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    views:{
        type: Number,
        default: 0
    },
    likes:{
        type: Number,
        default: 0
    },
    dislikes:{
        type: Number,
        default: 0
    },
    duration:{
        type: Number
    },
    isPublished:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    } 
})