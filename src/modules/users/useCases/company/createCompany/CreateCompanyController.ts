import { Response } from "express";
import { container } from "tsyringe";

import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

class CreateCompanyController {
  async handle(request, response: Response): Promise<Response> {
    const { name, cnpj, description } = request.body;
    const { user } = request;
    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
    const id = await createCompanyUseCase.execute({
      cnpj,
      description,
      name,
      user,
    });
    return response.status(201).json({ id });
  }
}

export { CreateCompanyController };
