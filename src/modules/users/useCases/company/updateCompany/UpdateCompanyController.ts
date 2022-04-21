import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

class UpdateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;
      const { id } = request.params;
      const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase);
      const company = await updateCompanyUseCase.execute({
        name,
        description,
        id,
      });
      return response.json(company);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UpdateCompanyController };
