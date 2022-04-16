import { Response } from "express";
import { container } from "tsyringe";

import { ListLocationsUseCase } from "./ListLocationsUseCase";

class ListLocationsController {
  async handle(request, response: Response): Promise<Response> {
    const { id: company_id } = request.company;
    const listLocationsUseCase = container.resolve(ListLocationsUseCase);
    const locations = await listLocationsUseCase.execute(company_id);
    return response.json(locations);
  }
}

export { ListLocationsController };
