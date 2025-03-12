import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new mongoose.Schema(
  {
    id: { type: Schema.Types.ObjectedId },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true, unique: true },
    address: { type: Number },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    orderedFoods: { type: [Schema.Types.ObjectID], ref: "Orders" },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Users = models.Users || model("Users", userSchema);
