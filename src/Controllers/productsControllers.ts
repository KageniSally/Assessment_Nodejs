import { v4 as uid } from 'uuid'
import { sqlConfig } from '../config'
import { Request, Response, RequestHandler } from 'express'
import { DatabaseConnection } from '../DatabaseHelpers'
import { Product } from '../Models/productModel'
import { log } from 'console'


const databaseInstance = new DatabaseConnection
export async function addProducts(req: Request, res: Response) {
    try {
        // console.log("Here")
        const Id = uid()

        const { Name, Price, Description } = req.body
        await databaseInstance.execute('addProducts', { Id, Name, Price, Description })
        // console.log(Name)
        return res.status(201).json({ message: "Product created successfully" })
    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function getProducts(req: Request, res: Response) {
    try {
        let products = (await databaseInstance.execute('getProducts', {})).recordset as Product[]
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json(error)
    }
}


export async function getProduct(req: Request, res: Response) {

    try {
        let product = (await databaseInstance.execute('getProduct', { Id: req.params.Id })).recordset[0] as Product
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json(error)
    }

}

export async function filterProducts(req: Request, res: Response) {

    try {
        let products = (await databaseInstance.execute('filterProducts', { Name: req.params.Name })).recordset as Product[]
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json(error)
    }

}