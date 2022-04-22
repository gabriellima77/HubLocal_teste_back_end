import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserAuthenticatedUseCase } from "./UserAuthenticatedUseCase";

class UserAuthenticatedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.body;
    const userAuthenticatedUseCase = container.resolve(
      UserAuthenticatedUseCase
    );
    const user = await userAuthenticatedUseCase.execute(token);
    return response.json(user);
  }
}

export { UserAuthenticatedController };
