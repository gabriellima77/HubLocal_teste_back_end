import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { ITicketsRepository } from "../../../repositories/ITicketsRespository";

@injectable()
class DeleteTicketUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: ITicketsRepository
  ) {}

  async execute(id: string): Promise<string> {
    const ticket = this.ticketsRepository.getTicket(id);
    if (!ticket) {
      throw new AppError("Ticket doesn't exist!", 404);
    }
    const deletedId = this.ticketsRepository.delete(id);
    return deletedId;
  }
}

export { DeleteTicketUseCase };
