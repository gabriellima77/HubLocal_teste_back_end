import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, name } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const token = await createUserUseCase.execute({ name, password, email });
    return response.status(201).json(token);
  }
}

export { CreateUserController };
