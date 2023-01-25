import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()

dotenv.config()


const connect = async () => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to mongod!")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB down!");
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB up & running.");
})

app.get("/", (req, res) => {
    res.send("HELLO THERE")
})



const PORT = 8800
app.listen(PORT, () => {
    connect()
    console.log(`Server started on port ${PORT}`)
})
