import mongoose from 'mongoose'
const { Schema } = mongoose

const PackageSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    days: {
        type: [String]
    },
    originalPrice: {
        type: Number,
        required: true
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    benefits: {
        type: [String],
    },
    featured: {
        type: Boolean,
        default: false
    }
})

const Package = mongoose.model("Package", PackageSchema)

export default Package