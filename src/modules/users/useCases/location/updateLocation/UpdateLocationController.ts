import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateLocationUseCase } from "./UpdateLocationUseCase";

class UpdateLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, address, city, state } = request.body;
    const updateLocationUseCase = container.resolve(UpdateLocationUseCase);
    const location = await updateLocationUseCase.execute({
      name,
      address,
      city,
      state,
      id,
    });
    return response.json(location);
  }
}

export { UpdateLocationController };
