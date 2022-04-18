import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetCompanyUseCase } from "./GetCompanyUseCase";

class GetCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getCompanyUseCase = container.resolve(GetCompanyUseCase);
    const { name, description, cnpj } = await getCompanyUseCase.execute(id);
    return response.json({ id, name, description, cnpj });
  }
}
