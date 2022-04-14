import { Request, Response } from "express";

import { DeleteLocationUseCase } from "./DeleteLocationUseCase";

class DeleteLocationController {
  constructor(private deleteLocationUseCase: DeleteLocationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    try {
      const value = this.deleteLocationUseCase.execute(id);
      return response.json(value);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { DeleteLocationController };
