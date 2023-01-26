import User from "../models/User.js"

//Get a user
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...otherDetails } = user._doc
        res.status(200).json({ ...otherDetails })
    } catch (error) {
        res.status(200).json(error)
    }
}

//Update a user
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        const {password, ...otherDetails} = updatedUser._doc
        res.status(200).json({...otherDetails})
    } catch (error) {
        res.status(500).json(error)
    }
}

//Delete a user
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json(`User with id ${req.params.id} deleted successfully.`)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}