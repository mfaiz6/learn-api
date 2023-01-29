import mongoose from "mongoose"
const { Schema } = mongoose

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    body: {
        type: [String],
        required: true
    }
}, { timestamps: true })

const Blog = mongoose.model("Blog", BlogSchema)

export default Blog