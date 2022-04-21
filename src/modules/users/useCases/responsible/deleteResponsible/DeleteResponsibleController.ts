import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteResponsibleUseCase } from "./DeleteResponsibleUseCase";

class DeleteResponsibleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteResponsibleUseCase = container.resolve(
      DeleteResponsibleUseCase
    );
    const deletedId = await deleteResponsibleUseCase.execute(id);
    return response.json(deletedId);
  }
}

export { DeleteResponsibleController };
