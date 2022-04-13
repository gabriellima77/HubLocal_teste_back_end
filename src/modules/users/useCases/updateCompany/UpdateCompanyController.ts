import { Request, Response } from "express";

import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

class UpdateCompanyController {
  constructor(private updateCompanyUseCase: UpdateCompanyUseCase) {}

  handle(request: Request, response: Response) {
    try {
      const { name, description } = request.body;
      const { id } = request.params;
      const company = this.updateCompanyUseCase.execute({
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
