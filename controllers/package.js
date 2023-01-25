import Package from '../models/Package.js'


//Create a Package
export const createPackage = async (req, res) => {
    const newPackage = new Package(req.body)
    try {
        const savedPackage = await newPackage.save()
        res.status(200).json(savedPackage)
    } catch (error) {
        res.status(500).json(error)
    }
}