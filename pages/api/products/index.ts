import type { NextApiRequest, NextApiResponse } from 'next'
import { ProductInterface } from '../../../interfaces';
import {db} from '../../../database'
import {Product} from '../../../models'
type Data = 
    |{message: string;}
    |ProductInterface[]
    |ProductInterface


export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getProducts(res);
    
        default:
            break;
    }
}

const getProducts = async(res: NextApiResponse<Data>) => {
    try {
        await db.connect();
        const products = await Product.find().select('title images price inStock slug -_id').lean();
        await db.disconnect();
        return res.status(200).json(products);
    } catch (error) {
        db.disconnect();
        console.log(error);
        return res.status(500).json({message: 'Ver la consola'})
    }
}