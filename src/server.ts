import express, { json } from 'express'
import productRouter from './Routes/productRoutes'


const app = express()

app.use(json())


//routes
app.use("/products", productRouter)

app.listen(4002, () => {
    console.log("server running.....")
})
