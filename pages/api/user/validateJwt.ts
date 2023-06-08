import { JWT } from "@/utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/database";
import { User } from "@/models";

type Data =
  | { message: string }
  | {
      token: string;
      user: {
        name: string;
        email: string;
        role: string;
      };
    };

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return checkJWT(req, res);

    default:
      break;
  }
}

const checkJWT = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    const { token = '' } = req.cookies;

    let userId = '';

    try {
        userId = await JWT.isValidToken( token );

    } catch (error) {
        return res.status(401).json({
            message: 'Token de autorización no es válido'
        })   
    }


    await db.connect();
    const user = await User.findById( userId ).lean();
    await db.disconnect();

    if ( !user ) {
        return res.status(400).json({ message: 'No existe usuario con ese id' })
    }

    const { _id, email, role, name } = user;

    return res.status(200).json({
        token: JWT.singToken( _id, email ),
        user: {
            email, 
            role, 
            name
        }
    })


}