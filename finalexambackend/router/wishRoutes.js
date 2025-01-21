import express from "express";
import { deleteWish, getWish, postWish } from "../controllers/wishController.js";





const router = express.Router()

router.route('/')

.get(getWish)
.post(postWish)


router.route('/:id') 
.delete(deleteWish)


export default router