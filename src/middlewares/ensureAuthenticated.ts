import { NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from "../modules/users/repositories/implementations/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request,
  response: Response,
  next: NextFunction
): Promise<void | Response> {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).json({ error: "Token is missing!" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "63f1dff46a1197a3e7031d46e962dd960"
    ) as IPayload;
    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      return response.status(401).json({ error: "User doesn't exist!" });
    }
    request.user = user;
    return next();
  } catch {
    return response.status(401).json({ error: "Invalid token!" });
  }
}
