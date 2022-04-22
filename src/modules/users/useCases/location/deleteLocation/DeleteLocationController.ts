import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteLocationUseCase } from "./DeleteLocationUseCase";

class DeleteLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteLocationUseCase = container.resolve(DeleteLocationUseCase);
    const value = await deleteLocationUseCase.execute(id);
    return response.json(value);
  }
}

export { DeleteLocationController };
