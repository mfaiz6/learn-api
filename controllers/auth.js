import User from '../models/User.js'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'


// export const register = async (req, res) => {
//     try {
//         const salt = bcrypt.genSaltSync(10)
//         const hash = bcrypt.hashSync(req.body.password, salt)
//         const newUser = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: hash
//         })
//         await newUser.save()
//         res.status(201).send("User registered successfully.")
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).json("Wrong credentials!")
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json("Wrong credentials!")
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

        const { password, ...otherDetails } = user._doc
        res.cookie("access_token", token, { httpOnly: true }).status(200).json({ ...otherDetails })

    } catch (error) {
        res.status(500).json(error)
    }
}