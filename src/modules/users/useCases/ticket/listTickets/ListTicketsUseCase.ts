import { inject, injectable } from "tsyringe";

import { Ticket } from "../../../entities/Ticket";
import { TicketsRepository } from "../../../repositories/implementations/TicketsRepository";

@injectable()
class ListTicketsUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: TicketsRepository
  ) {}

  async execute(companyId: string): Promise<Ticket[]> {
    const tickets = this.ticketsRepository.list(companyId);
    return tickets;
  }
}

export { ListTicketsUseCase };
