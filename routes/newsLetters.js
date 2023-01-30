import express from 'express'
import { saveEmail } from '../controllers/newsLetter.js'

const router = express.Router()


router.post("/", saveEmail)

export default router