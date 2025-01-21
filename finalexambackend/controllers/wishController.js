
import WishItem from "../models/wishModel.js"







const getWish = async(req,res) => {
    try {
        const products = await WishItem.find()
        res.json(products)
    } catch (error) {
        res.json("erorr")
    }
}


const postWish = async(req,res) => {
   try {
    const newProduct = req.body

    await WishItem.create(newProduct)
    res.json(newProduct)
   } catch (error) {
    res.json("xeta")
   }
}


const deleteWish = async(req, res) => {
    try {
      const{id} = req.params 
      await WishItem.findByIdAndDelete(id)
      res.json("data silindi")
    } catch (error) {
        res.json("xeta")
    }
}


export {getWish, postWish, deleteWish}