import { Request, Response } from "express";

import { UserLoginUseCase } from "./UserLoginUseCase";

class UserLoginController {
  constructor(private userLoginUseCase: UserLoginUseCase) {}

  handle(request: Request, response: Response): Response {
    const { password, email } = request.body;
    try {
      const user = this.userLoginUseCase.execute({ password, email });
      return response.json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UserLoginController };
