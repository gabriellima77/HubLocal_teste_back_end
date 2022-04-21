import { inject, injectable } from "tsyringe";

import { Ticket } from "../../../entities/Ticket";
import { TicketsRepository } from "../../../repositories/implementations/TicketsRepository";

@injectable()
class ListTicketsByLocationUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: TicketsRepository
  ) {}

  async execute(locationId: string): Promise<Ticket[]> {
    const tickets = await this.ticketsRepository.listLocationTickets(
      locationId
    );
    return tickets;
  }
}

export { ListTicketsByLocationUseCase };
