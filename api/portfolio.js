import { NowRequest, NowResponse } from "@vercel/node";

export default (req, res) => {
  res.json({ name: "John", email: "john@example.com" });
};