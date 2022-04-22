import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTicketUseCase } from "./UpdateTicketUseCase";

class UpdateTicketController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { status } = request.body;
    const updateTicketUseCase = container.resolve(UpdateTicketUseCase);
    const ticket = await updateTicketUseCase.execute({ id, status });
    return response.json(ticket);
  }
}

export { UpdateTicketController };
