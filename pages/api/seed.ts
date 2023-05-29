import { db, seedProducts } from '@/database'
import type { NextApiRequest, NextApiResponse } from 'next'
import {Product} from '../../models'
type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if(process.env.NODE_ENV === 'production') {
        return res.status(400).json({message: 'No access'})
    }

    await db.connect();
    await Product.deleteMany();
    await Product.insertMany(seedProducts.initialData.products);
    await db.disconnect();

    res.status(200).json({message: 'Process successful'})

}