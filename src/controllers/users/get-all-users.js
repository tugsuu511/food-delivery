import { Users } from "../../models/user.schema.js";

export const getUserRegisterById = async (req, res) => {
//   const user = await Users.findById(req.params.id).populate("user");
//   req.json({ user });
  try {
    const {mail} = req.body;
    if(!mail){
        const allUsers = await Users.find();
        return res.status(200).json({users: allUsers})
    }
  } catch (err) {
    console.log(err);
  }
};