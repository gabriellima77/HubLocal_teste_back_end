import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserAuthenticatedUseCase } from "./UserAuthenticatedUseCase";

class UserAuthenticatedController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { token } = request.body;
      const userAuthenticatedUseCase = container.resolve(
        UserAuthenticatedUseCase
      );
      const user = await userAuthenticatedUseCase.execute(token);
      return response.json(user);
    } catch (error) {
      return response.status(401).json({ error: error.message });
    }
  }
}

export { UserAuthenticatedController };
