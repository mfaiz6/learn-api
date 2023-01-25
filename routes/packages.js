import express from 'express'
import { createPackage, getPackage, updatePackage } from '../controllers/package.js'

const router = express.Router()


//Create a Package
router.post("/", createPackage)

//Get a Package
router.get("/:id", getPackage)

//Update a Package
router.put("/:id", updatePackage)

export default router