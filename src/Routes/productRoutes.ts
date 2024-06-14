import { Router } from "express";
import { addProducts, filterProducts, getProduct, getProducts } from "../Controllers/productsControllers";

const productRouter=Router()


// console.log("here")
productRouter.post("",addProducts)
productRouter.get("",getProducts)
productRouter.get("/:Id",getProduct)
productRouter.get("/filter/:Name",filterProducts)
export default productRouter