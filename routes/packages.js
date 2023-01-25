import express from 'express'
import { createPackage, deletePackage, getPackage, updatePackage } from '../controllers/package.js'

const router = express.Router()


//Create a Package
router.post("/", createPackage)

//Get a Package
router.get("/:id", getPackage)

//Update a Package
router.put("/:id", updatePackage)

//Delete a package
router.delete("/:id", deletePackage)

export default router