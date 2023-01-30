import mongoose from 'mongoose'
const {Schema} = mongoose

const QuerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Query = mongoose.model("Query", QuerySchema)

export default Query