import { Request, Response } from "express";

import { DeleteCompanyUseCase } from "./DeleteCompanyUseCase";

class DeleteCompanyController {
  constructor(private deleteCompanyUseCase: DeleteCompanyUseCase) {}

  handle(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const company_id = this.deleteCompanyUseCase.execute(id);
      return response.json(company_id);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { DeleteCompanyController };
