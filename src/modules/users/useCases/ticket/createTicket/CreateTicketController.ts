import { Response } from "express";
import { container } from "tsyringe";

import { CreateTicketUseCase } from "./CreateTicketUseCase";

class CreateTicketController {
  async handle(request, response: Response): Promise<Response> {
    const { created_by, will_solve } = request.body;
    const { company, location } = request;
    const createTicketUseCase = container.resolve(CreateTicketUseCase);
    await createTicketUseCase.execute({
      company,
      created_by,
      will_solve,
      location,
    });
    return response.status(201).send();
  }
}

export { CreateTicketController };
