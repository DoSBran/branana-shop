import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import {NextApiResponse, NextApiRequest} from 'next';

export const singToken = (_id: Types.ObjectId, email: string) => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error("No hay firma");
  }

  return jwt.sign({ _id, email }, process.env.JWT_SECRET_SEED, {
    expiresIn: "30d",
  });
};


export const isValidToken = ( token: string ):Promise<string> => {
  if ( !process.env.JWT_SECRET_SEED ) {
      throw new Error('No hay semilla de JWT - Revisar variables de entorno');
  }

  return new Promise( (resolve, reject) => {

      try {
          jwt.verify( token, process.env.JWT_SECRET_SEED || '', (err, payload) => {
              if ( err ) return reject('JWT no es válido');

              const { _id } = payload as { _id: string };

              resolve(_id);

          })
      } catch (error) {
          reject('JWT no es válido');
      }


  })

}