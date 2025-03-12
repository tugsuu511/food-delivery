import mongoose, { SchemaType } from "mongoose";

const { Schema, model, models } = mongoose;

const foodOrderSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  totalPrice: { type: Number },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  address: String,
  //   user: { type: ObjectId },
  //   foodOrderItems: { type: foodOrderItem[] },
    status: { type: string, enum:["PENDING", "CANCELED", "DELIVERED"] },
});

export const foodOrder = mongoose.model("Users", foodOrderSchema);