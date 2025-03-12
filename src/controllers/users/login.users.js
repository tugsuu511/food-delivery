import { Users } from "../../models/user.schema.js";
import jwt from "jsonwebtoken";

export const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if ((user && user.password === password)) {
      const token = jwt.sign({ email: user.email }, "Taaldaa");
      res.json({ message: "login success", token: token });
    } else {
      res.json({ message: "login failed" });
    }
  } catch (err) {
    console.log(err);
  }
};