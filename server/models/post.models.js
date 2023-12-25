import mongoose, { Schema, model } from "mongoose";

const postSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true 
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
        type: Map,
        of: Boolean,
    },
    comments: {
        type: Array,
        default: [],
    }

}, { timestamps: true });

const Post = model('Post', postSchema);

export default Post;