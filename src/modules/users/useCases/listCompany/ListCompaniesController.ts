import { Response } from "express";

import { ListCompaniesUseCase } from "./ListCompaniesUseCase";

class ListCompaniesController {
  constructor(private listCompaniesUseCase: ListCompaniesUseCase) {}

  handle(request, response: Response) {
    const { id } = request.user;
    const companies = this.listCompaniesUseCase.execute(id);
    return response.json(companies);
  }
}

export { ListCompaniesController };
