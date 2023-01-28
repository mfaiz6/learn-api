import express from 'express'
import { createPackage, deletePackage, featuredPackages, getPackage, getPackages, updatePackage } from '../controllers/package.js'

const router = express.Router()


//Create a Package
router.post("/", createPackage)

//Get a Package
router.get("/package/:id", getPackage)

//Update a Package
router.put("/:id", updatePackage)

//Delete a Package
router.delete("/:id", deletePackage)


//Get all Packages
router.get("/", getPackages)

//Get featured Packages
router.get("/featured", featuredPackages)




export default router