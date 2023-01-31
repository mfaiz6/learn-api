import express from 'express'
import { quoteQuery } from '../controllers/quoteQuery.js'

const router = express.Router()

router.post("/", quoteQuery)


export default router