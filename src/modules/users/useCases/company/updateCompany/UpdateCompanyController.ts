import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

class UpdateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const { id } = request.params;
    const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase);
    const company = await updateCompanyUseCase.execute({
      name,
      description,
      id,
    });
    return response.json({
      name: company.name,
      description: company.description,
      id,
    });
  }
}

export { UpdateCompanyController };
