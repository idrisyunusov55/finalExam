import ProductItem from "../models/productsModel.js"







const getProducts = async(req,res) => {
    try {
        const products = await ProductItem.find()
        res.json(products)
    } catch (error) {
        res.json("erorr")
    }
}


const postProducts = async(req,res) => {
   try {
    const newProduct = req.body

    await ProductItem.create(newProduct)
    res.json(newProduct)
   } catch (error) {
    res.json("xeta")
   }
}


const deleteProducts = async(req, res) => {
    try {
      const{id} = req.params 
      await ProductItem.findByIdAndDelete(id)
      res.json("data silindi")
    } catch (error) {
        res.json("xeta")
    }
}


export {getProducts, postProducts, deleteProducts}