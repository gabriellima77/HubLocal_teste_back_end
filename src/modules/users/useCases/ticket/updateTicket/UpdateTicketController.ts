import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTicketUseCase } from "./UpdateTicketUseCase";

class UpdateTicketController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { status, will_solve } = request.body;
    const updateTicketUseCase = container.resolve(UpdateTicketUseCase);
    const updateData = { id, status };
    if (will_solve) {
      Object.assign(updateData, { will_solve });
    }
    const ticket = await updateTicketUseCase.execute(updateData);
    return response.json(ticket);
  }
}

export { UpdateTicketController };
