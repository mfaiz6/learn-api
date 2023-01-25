import Package from '../models/Package.js'


//Create a Package
export const createPackage = async (req, res) => {
    const newPackage = new Package(req.body)
    try {
        const savedPackage = await newPackage.save()
        res.status(201).json(savedPackage)
    } catch (error) {
        res.status(500).json(error)
    }
}


//Get a Package
export const getPackage = async (req, res) => {
    try {
        const Apackage = await Package.findById(req.params.id)
        res.status(200).json(Apackage)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Update a Package
export const updatePackage = async (req, res) => {
    try {
        const updatedPackage = await Package.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedPackage)
    } catch (error) {
        res.status(500).json(error)
    }
}