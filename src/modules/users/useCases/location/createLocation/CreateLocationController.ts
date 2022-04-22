import { Response } from "express";
import { container } from "tsyringe";

import { CreateLocationUseCase } from "./CreateLocationUseCase";

class CreateLocationController {
  async handle(request, response: Response): Promise<Response> {
    const { name, address, city, state } = request.body;
    const { company } = request;
    const createLocationUseCase = container.resolve(CreateLocationUseCase);

    const id = await createLocationUseCase.execute({
      address,
      city,
      name,
      state,
      company,
    });
    return response.status(201).json({ id });
  }
}

export { CreateLocationController };
