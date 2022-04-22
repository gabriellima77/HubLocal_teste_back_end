import { Response } from "express";
import { container } from "tsyringe";

import { ListTicketsUseCase } from "./ListTicketsUseCase";

class ListTicketsController {
  async handle(request, response: Response): Promise<Response> {
    const { company } = request;
    const listTicketsUseCase = container.resolve(ListTicketsUseCase);
    const tickets = await listTicketsUseCase.execute(company.id);
    return response.json(tickets);
  }
}

export { ListTicketsController };
