import { Response } from "express";
import { container } from "tsyringe";

import { ListCompaniesUseCase } from "./ListCompaniesUseCase";

class ListCompaniesController {
  async handle(request, response: Response): Promise<Response> {
    const { user } = request;
    const listCompaniesUseCase = container.resolve(ListCompaniesUseCase);
    const companies = await listCompaniesUseCase.execute(user.id);
    const filteredCompanies = companies.map(
      ({ name, cnpj, description, id }) => {
        return {
          name,
          cnpj,
          description,
          id,
        };
      }
    );
    return response.json(filteredCompanies);
  }
}

export { ListCompaniesController };
