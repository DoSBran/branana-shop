import { db } from "@/database";
import { User } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { JWT } from "@/utils";

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return login(req, res);

    default:
      res.status(400).json({ message: "Invalid method" });
  }
}

const login = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email, password } = req.body;

  try {
    await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect();

    if (!user)
      return res
        .status(400)
        .json({ message: "Correo o contraseña no validos" });
    if (!bcrypt.compareSync(password, user.password!))
      return res
        .status(400)
        .json({ message: "Correo o contraseña no validos" });

    const { role, name, _id } = user;

    const token = JWT.singToken(_id, email)

    res.status(200).json({
      token,
      user: {
        role,
        name,
        email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Ver la consola" });
  }
};