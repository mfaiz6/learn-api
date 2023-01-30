import express from 'express'
import { saveQuery } from '../controllers/query.js'

const router = express.Router()


router.post("/", saveQuery)

export default router