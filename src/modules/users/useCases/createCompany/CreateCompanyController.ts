import { Request, Response } from "express";

import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

class CreateCompanyController {
  constructor(private createCompanyUseCase: CreateCompanyUseCase) {}

  handle(request, response: Response): Response {
    const { name, cnpj, description } = request.body;
    const { user } = request;
    try {
      const company = this.createCompanyUseCase.execute({
        cnpj,
        description,
        name,
        user: user.id,
      });
      return response.status(201).json(company);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateCompanyController };
