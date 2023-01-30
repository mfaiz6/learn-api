import Query from "../models/Query.js"


export const saveQuery = async (req, res) => {
    try {
        const query = new Query({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        })
        await query.save()
        res.status(200).json("Query sent success!")
    } catch (error) {
        res.status(500).json(error)
    }
}