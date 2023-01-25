import User from '../models/User.js'


export const register = async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        await newUser.save()
        res.status(201).send("User registered successfully.")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).json("Wrong credentials!")
        }

        const isPasswordCorrect = await user.password === req.body.password

        if (!isPasswordCorrect) {
            return res.status(400).json("Wrong credentials!")
        }

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json(error)
    }
}