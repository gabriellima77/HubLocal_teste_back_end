import { Response } from "express";
import { container } from "tsyringe";

import { CreateLocationUseCase } from "./CreateLocationUseCase";

class CreateLocationController {
  async handle(request, response: Response): Promise<Response> {
    const { name, address, city, state } = request.body;
    const { company } = request;
    try {
      const createLocationUseCase = container.resolve(CreateLocationUseCase);

      await createLocationUseCase.execute({
        address,
        city,
        name,
        state,
        company: company.id,
      });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateLocationController };
