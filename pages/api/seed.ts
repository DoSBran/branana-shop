import { db, seedData } from '@/database'
import { Product, User } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if(process.env.NODE_ENV === 'production') {
        return res.status(400).json({message: 'No access'})
    }

    await db.connect();
    await User.deleteMany();
    await User.insertMany(seedData.initialData.users)
    await Product.deleteMany();
    await Product.insertMany(seedData.initialData.products);
    await db.disconnect();

    res.status(200).json({message: 'Process successful'})

}