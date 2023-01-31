import QuoteQuery from '../models/QuoteQuery.js'

export const quoteQuery = async (req, res) => {
    try {
        const query = new QuoteQuery(req.body)
        await query.save()
        res.status(200).json("Query sent successfully!")
    } catch (error) {
        res.status(500).json(error)
    }
}