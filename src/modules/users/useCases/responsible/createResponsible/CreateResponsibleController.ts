import { Response } from "express";
import { container } from "tsyringe";

import { CreateResponsibleUseCase } from "./CreateResponsibleUseCase";

class CreateResponsibleController {
  async handle(request, response: Response) {
    const { name, isMain, phone, address, city, state } = request.body;
    const { location } = request;
    const createResponsibleUseCase = container.resolve(
      CreateResponsibleUseCase
    );
    await createResponsibleUseCase.execute({
      name,
      isMain,
      phone,
      address,
      city,
      state,
      location,
    });
    return response.status(201).send();
  }
}

export { CreateResponsibleController };
