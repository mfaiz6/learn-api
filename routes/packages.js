import express from 'express'
import { createPackage, deletePackage, featuredPackages, getPackage, getPackages, updatePackage } from '../controllers/package.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()


//Create a Package
router.post("/", verifyAdmin, createPackage)

//Get a Package
router.get("/package/:id", getPackage)

//Update a Package
router.put("/:id", verifyAdmin, updatePackage)

//Delete a Package
router.delete("/:id", verifyAdmin, deletePackage)


//Get all Packages
router.get("/", getPackages)

//Get featured Packages
router.get("/featured", featuredPackages)




export default router