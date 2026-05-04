import { Request, Response } from "express";

interface LoginBody {
  email: string;
  password: string;
}

export const loginUser = (
  req: Request<{}, {}, LoginBody>,
  res: Response
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Email and password are required",
    });
  }

  return res.json({
    message: "Login successful",
    email,
  });
};