import mongoose from "mongoose";

const { Schema} = mongoose;

const foodSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId },
    foodName: { type: String },
    price: { type: Number },
    image: { type: String },
    ingredients: { type: String },
    // catgory: { type: ObjectId },
    address: String,
  },
  {
    timestamps: true,
  }
);

export const Foods = mongoose.model("Foods", foodSchema);