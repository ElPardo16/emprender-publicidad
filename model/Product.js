import { model, models, Schema } from "mongoose";
// importamos la dependencias

//creamos un nuevo esquema par ala base de datos y asignamos sus calves y sus tipos
const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    img: String,
    category: String
},{
    //guardamos la fecha de creacion en la DB
    timestamps: true,
    versionKey: false
})
// exportamos el modelo, si ya existe entoces lo usamos si no lo creamos
export default models.Product || model("Product", productSchema)