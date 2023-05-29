import type { NextApiRequest, NextApiResponse } from 'next'
import { ProductInterface } from '../../../interfaces';
import {db, SHOP_CONSTANTS} from '../../../database'
import {Product} from '../../../models'
type Data = 
    |{message: string;}
    |ProductInterface[]
    |ProductInterface


export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getProducts(req, res);
    
        default:
            return res.status(400).json({message: 'Invalid method'});
    }
}

const getProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

   const {gender='all'} = req.query
   let condition = {}
   if(gender !== 'all' && SHOP_CONSTANTS.validGender.includes(`${gender}`)){
    condition = {gender}

   }
    try {
        await db.connect();
        const products = await Product.find(condition).select('title images price inStock slug -_id').lean();
        await db.disconnect();
        return res.status(200).json(products);
    } catch (error) {
        db.disconnect();
        console.log(error);
        return res.status(500).json({message: 'Ver la consola'})
    }
}