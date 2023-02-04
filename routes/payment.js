import express from 'express'
import Razorpay from 'razorpay'
import crypto from 'crypto'
import Package from '../models/Package.js'

const router = express.Router()


//check price
router.post("/validatePrice", async (req, res) => {
    const productId = req.body.productId
    const finalPrice = req.body.finalPrice
    const finalChildPrice = req.body.finalChildPrice
    const quantity = req.body.quantity
    const childQuantity = req.body.childValue

    try {
        const product = await Package.findById(productId)
        const originalAdultPrice = product.cheapestAdultPrice
        const originalChildPrice = product.childPrice

        let fullPrice
        if (finalChildPrice <= 0) {
            fullPrice = finalPrice
            if (fullPrice !== originalAdultPrice * quantity) {
                return res.status(400).json("Invalid Price!!!")
            }
        } else if (finalChildPrice > 0) {
            fullPrice = finalPrice + finalChildPrice
            if (fullPrice !== (originalAdultPrice * quantity) + (originalChildPrice * childQuantity)) {
                return res.status(400).json("Invalid Price!!!")
            }
        }
        // if(finalPrice!==originalPrice*quantity) {
        //     return res.status(400).json("Invalid Price!!!")
        // }
        return res.status(200).json("Price validated!")

    } catch (error) {
        res.status(500).json("Internal Server Error!")
    }
})

//create orders
router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZOR_KEY,
            key_secret: process.env.RAZORS_SECRET
        })

        const options = {
            amount: Math.round(req.body.amount * 100),
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex")
        }

        instance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error)
                return res.status(500).json({ message: "Something went wrong!" })
            }
            res.status(200).json({ data: order })
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error!" })
    }
})

//payment verify

router.post("/verify", async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORS_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSign) {
            return res.status(200).json({ message: "Payment verified successfully" });
        } else {
            return res.status(400).json({ message: "Invalid signature sent!" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.log(error);
    }
});



export default router