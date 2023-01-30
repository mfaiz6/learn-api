import NewsLetter from "../models/newsLetter.js"

export const saveEmail = async (req, res) => {
    try {
        const email = new NewsLetter({
            email: req.body.email
        })
        await email.save()
        res.status(200).json(req.body.email)

    } catch (error) {
        res.status(500).json(error)
    }
}