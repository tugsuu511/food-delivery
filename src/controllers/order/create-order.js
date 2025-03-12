// import { foodOrder } from "../../models/food.order.schema";

// export const createOrder = async (req, res) => {
//   try {
//     const { Users } = req.body;
//     const newOrder = await foodOrder.create({
//       Users,
//       status: "PENDING",
//     });
//     res.json({ message: "Order created", order: newOrder });
//   } catch (err) {
//     console.log(err);
//   }
// };