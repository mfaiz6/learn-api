import express from 'express'
import { createPackage } from '../controllers/package.js'

const router = express.Router()

router.post("/", createPackage)


export default router