import express from 'express'
import ProductRouter from './router/propductsRoutes.js'
import WishRouter from './router/wishRoutes.js'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import { connectDb } from './config/config.js'



configDotenv()
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors('*'))





app.use("/product", ProductRouter)

app.use("/wish", WishRouter)


connectDb()

app.listen(5802, () => {
    console.log('backend running');
})