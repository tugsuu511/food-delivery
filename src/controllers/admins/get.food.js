import { Foods } from "../../models/food.schema.js";

export const getFoods = async (req, res) => {
  try {
    const foods = await Foods.find();

    res.json({ message: "success", data: foods });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};