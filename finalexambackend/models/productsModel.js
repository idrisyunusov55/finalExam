import mongoose from "mongoose";



export const ProductSchema = mongoose.Schema({
    thumbnail:{type:String},
    title:{type:String},
    price:{type:String},
}, {timestamp:true})


const ProductItem = mongoose.model("product", ProductSchema)


export default ProductItem