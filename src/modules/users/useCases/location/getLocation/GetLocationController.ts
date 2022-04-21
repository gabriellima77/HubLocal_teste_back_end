import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetLocationUseCase } from "./GetLocationUseCase";

class GetLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getLocationUseCase = container.resolve(GetLocationUseCase);
    const location = await getLocationUseCase.execute(id);
    return response.json(location);
  }
}

export { GetLocationController };
