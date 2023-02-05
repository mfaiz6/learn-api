import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import packagesRoute from './routes/packages.js'
import blogsRoute from './routes/blogs.js'
// import usersRoute from './routes/users.js'
import newsLettersRoute from './routes/newsLetters.js'
import queryRoute from './routes/query.js'
import quoteQueryRoute from './routes/quoteQuery.js'
import paymentRoute from './routes/payment.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors())

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



app.use(cookieParser())

app.use(express.json())


app.use("/api/auth", authRoute)

// app.use("/api/users", usersRoute)

app.use("/api/packages", packagesRoute)

app.use("/api/blogs", blogsRoute)

app.use("/api/newsLetter", newsLettersRoute)

app.use("/api/query", queryRoute)

app.use("/api/quoteQuery", quoteQueryRoute)

app.use("/api/payment", paymentRoute)


app.get("/test", (req, res) => {
    res.send("RUNNING.")
})

const PORT = process.env.PORT || 8800
app.listen(PORT, () => {
    connect()
    console.log(`Server started on port ${PORT}`)
})
