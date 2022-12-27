import connectDB from "../../../controller/DBConnection"
import Product from "../../../model/Product"
// importamos las dependencias
connectDB()
// nos conectamos a la DB
export default async function handler(req, res) {
    // destructuramos el request y obtenemos el metodo y el body
    const {method, body} = req
    switch(method){
        // si el metodo es get devolvemos todos los productos de la base de datos
        case "GET":
            // con try catch capturamos errores en caso de haberlos
            try {
                const products = await Product.find()
                return res.status(200).json(products)
            } catch (err) {
                return res.status(400).json({error: err.message})
            }
            //si el metodo es post entonces guardamos un nuevo producto en la DB
        case "POST":
            try {
                // creamos un nuevo modelo y le pasamos el body que nos da la peticion
                const product = new Product(body)
                // lo guardamos en la DB
                const savedProduct = await product.save()
                // devolvemos estado 201 que es peticion post ejecutada correctamente
                // y devolvemos un json con un mensaje y el producto que se guardo
                return res.status(201).json({msg: "Saved", product: savedProduct})
            } catch (err) {
                return res.status(400).json({error: err.message})
            }
        default:
            // si el metodo no es soportado delvolvemos un error
            return res.status(400).json({msg: "Method not supported"}) 
    }
    
}