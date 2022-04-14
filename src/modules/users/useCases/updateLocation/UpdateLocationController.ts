import { Request, Response } from "express";

import { UpdateLocationUseCase } from "./UpdateLocationUseCase";

class UpdateLocationController {
  constructor(private updateLocationUseCase: UpdateLocationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { name, address, city, state } = request.body;
    try {
      const location = this.updateLocationUseCase.execute({
        name,
        address,
        city,
        state,
        id,
      });
      return response.json(location);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UpdateLocationController };
