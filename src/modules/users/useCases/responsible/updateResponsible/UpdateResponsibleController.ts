import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateResponsibleUseCase } from "./UpdateResponsibleUseCase";

class UpdateResponsibleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, phone, address, city, state, isMain } = request.body;
    const { id } = request.params;
    const updateResponsibleUseCase = container.resolve(
      UpdateResponsibleUseCase
    );
    const responsible = await updateResponsibleUseCase.execute({
      name,
      address,
      city,
      id,
      isMain,
      phone,
      state,
    });
    return response.json(responsible);
  }
}

export { UpdateResponsibleController };
