import { Response } from "express";

import { CreateLocationUseCase } from "./CreateLocationUseCase";

class CreateLocationController {
  constructor(private createLocationUseCase: CreateLocationUseCase) {}

  handle(request, response: Response): Response {
    const { name, address, city, state } = request.body;
    const { company } = request;
    try {
      const location = this.createLocationUseCase.execute({
        address,
        city,
        name,
        state,
        company: company.id,
      });
      return response.status(201).json(location);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateLocationController };
