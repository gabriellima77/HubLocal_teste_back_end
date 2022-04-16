import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCompanyUseCase } from "./DeleteCompanyUseCase";

class DeleteCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      const deleteCompanyUseCase = container.resolve(DeleteCompanyUseCase);
      const companyId = await deleteCompanyUseCase.execute(id);
      return response.json(companyId);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { DeleteCompanyController };
