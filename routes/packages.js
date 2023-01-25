import express from 'express'
import { createPackage, getPackage } from '../controllers/package.js'

const router = express.Router()


//Create a Package
router.post("/", createPackage)

//Get a Package
router.get("/:id", getPackage)

export default router