import { UserInterface } from "@/interfaces";
import mongoose, { Schema, Model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: { values: ["admin", "client"] },
      message: "{VALUE} no es un rol valido",
      default: "client",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<UserInterface> = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
