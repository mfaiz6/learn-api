import mongoose from 'mongoose'
const {Schema} = mongoose

const newsLetterSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
}, {timestamps: true})

const NewsLetter = mongoose.model("NewsLetter", newsLetterSchema)

export default NewsLetter