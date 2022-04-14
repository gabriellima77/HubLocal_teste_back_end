import { Request, Response } from "express";

import { ListLocationsUseCase } from "./ListLocationsUseCase";

class ListLocationsController {
  constructor(private listLocationsUseCase: ListLocationsUseCase) {}

  handle(request, response: Response): Response {
    const { id: company_id } = request.company;
    const locations = this.listLocationsUseCase.execute(company_id);
    return response.json(locations);
  }
}

export { ListLocationsController };
