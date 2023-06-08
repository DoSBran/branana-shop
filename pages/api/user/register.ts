import { db } from "@/database";
import { User } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { JWT, validations } from "@/utils";

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
    case "POST":
      return registerUser(req, res);

    default:
      return res.status(400).json({ message: "Invalid method" });
  }
}

const registerUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { name, email, password, role = "client" } = req.body;

  if (!name) return res.status(400).json({ message: "name is require" });
  if (!password)
    return res.status(400).json({ message: "password is require" });
  if (!email) return res.status(400).json({ message: "email is require" });
  if(!validations.isValidEmail(email)) return res.status(400).json({ message: "email requiere formato de correo"})
  await db.connect()
  const user = await User.findOne({ email });
  await db.disconnect();
  if (user)
    return res.status(400).json({ message: "El usuario ya fue registrado" });
  const pass = bcrypt.hashSync(password);
  const newUser = new User({
    name,
    email: email.toLowerCase(),
    password: pass,
    role,
    createdAt: new Date(),
  });

  try {
    await newUser.save();
    const { _id, name, email, role } = newUser;
    const token = JWT.singToken(_id, email);
    res.status(201).json({
      token,
      user: {
        name,
        email,
        role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error ver la consola" });
  }
};
