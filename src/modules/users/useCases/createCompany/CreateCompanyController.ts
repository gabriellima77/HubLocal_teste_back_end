import { Response } from "express";
import { container } from "tsyringe";

import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

class CreateCompanyController {
  async handle(request, response: Response): Promise<Response> {
    const { name, cnpj, description } = request.body;
    const { user } = request;
    try {
      const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
      await createCompanyUseCase.execute({
        cnpj,
        description,
        name,
        user,
      });
      return response.status(201).send();
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateCompanyController };
