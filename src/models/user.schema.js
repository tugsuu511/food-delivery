import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

// uncomment hiine
const userSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  email: { type: String },
  password: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  // role: { type: UserRole },
  // orderedFoods: { type: ObjectId },
  
  isVerified: { type: Boolean },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  address: String,
});

export const Users = mongoose.model("Users", userSchema);
