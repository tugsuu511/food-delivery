import jwt from "jsonwebtoken";

export const authorizationMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.json({ message: "unauthorized!!!" });

  const token = authorization.split(" ")[1];

  try {
    // decode hiisnee req.user gedeg damjuulna
    jwt.verify(token, "Taaldaa");
    next();
  } catch (err) {
    return res.json({ message: "unauthorized!!!" });
  }
};
