import { Response } from "express";
import { container } from "tsyringe";

import { ListCompaniesUseCase } from "./ListCompaniesUseCase";

class ListCompaniesController {
  async handle(request, response: Response): Promise<Response> {
    const { id } = request.user;
    const listCompaniesUseCase = container.resolve(ListCompaniesUseCase);
    const companies = await listCompaniesUseCase.execute(id);
    return response.json(companies);
  }
}

export { ListCompaniesController };
