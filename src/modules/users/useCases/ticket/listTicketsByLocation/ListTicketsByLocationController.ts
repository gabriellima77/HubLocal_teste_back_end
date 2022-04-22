import { Response } from "express";
import { container } from "tsyringe";

import { ListTicketsByLocationUseCase } from "./ListTicketsByLocationUseCase";

class ListTicketsByLocationController {
  async handle(request, response: Response): Promise<Response> {
    const { location } = request;
    const listTicketsByLocationUseCase = container.resolve(
      ListTicketsByLocationUseCase
    );
    const tickets = await listTicketsByLocationUseCase.execute(location.id);
    return response.json(tickets);
  }
}

export { ListTicketsByLocationController };
