import mongoose from "mongoose";



export const WishSchema = mongoose.Schema({
    thumbnail:{type:String},
    title:{type:String},
    price:{type:String},
}, {timestamp:true})


const WishItem = mongoose.model("wish", WishSchema)


export default WishItem