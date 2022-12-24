import connectDB from "../../../controller/DBConnection"
import Product from "../../../model/Product"

connectDB()
export default async function handler(req, res) {
    const {method, body} = req
    switch(method){
        case "GET":
            try {
                const products = await Product.find()
                return res.status(200).json(products)
            } catch (err) {
                return res.status(400).json({error: err.message})
            }
        case "POST":
            try {
                const product = new Product(body)
                const savedProduct = await product.save()
                return res.status(201).json({msg: "Saved", product: savedProduct})
            } catch (err) {
                return res.status(400).json({error: err.message})
            }
        default:
            return res.status(400).json({msg: "Method not supported"}) 
    }
    
}