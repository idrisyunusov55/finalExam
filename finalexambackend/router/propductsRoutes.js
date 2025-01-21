import express from "express";
import { deleteProducts, getProducts, postProducts } from "../controllers/productsController.js";




const router = express.Router()

router.route('/')

.get(getProducts)
.post(postProducts)


router.route('/:id') 
.delete(deleteProducts)


export default router