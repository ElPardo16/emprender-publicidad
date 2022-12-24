import { model, models, Schema } from "mongoose";

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    img: String,
    category: String
},{
    timestamps: true,
    versionKey: false
})

export default models.Product || model("Product", productSchema)