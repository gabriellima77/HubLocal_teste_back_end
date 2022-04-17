import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserLoginUseCase } from "./UserLoginUseCase";

class UserLoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;
    try {
      const userLoginUseCase = container.resolve(UserLoginUseCase);
      const token = await userLoginUseCase.execute({ password, email });
      return response.json(token);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UserLoginController };
