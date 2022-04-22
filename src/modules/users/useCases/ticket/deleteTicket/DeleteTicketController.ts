import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTicketUseCase } from "./DeleteTicketUseCase";

class DeleteTicketController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteTicketUseCase = container.resolve(DeleteTicketUseCase);
    const deletedId = await deleteTicketUseCase.execute(id);
    return response.json(deletedId);
  }
}

export { DeleteTicketController };
