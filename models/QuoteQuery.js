import mongoose from 'mongoose'
const {Schema} = mongoose

const QuoteQuerySchema = new Schema({
    explore: {
        type: String,
        required: true
    },
    dateOfTravel: {
        type: String,
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    }
}, {timestamps: true})

const QuoteQuery = mongoose.model("QuoteQuery", QuoteQuerySchema)

export default QuoteQuery