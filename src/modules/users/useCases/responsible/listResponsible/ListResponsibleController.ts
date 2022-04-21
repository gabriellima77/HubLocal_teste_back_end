import { Response } from "express";
import { container } from "tsyringe";

import { ListResponsibleUseCase } from "./ListResponsibleUseCase";

class ListResponsibleController {
  async handle(request, response: Response): Promise<Response> {
    const { location } = request;
    const listResponsibleUseCase = container.resolve(ListResponsibleUseCase);
    const responsible = await listResponsibleUseCase.execute(location.id);
    return response.json(responsible);
  }
}

export { ListResponsibleController };
