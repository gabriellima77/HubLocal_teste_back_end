import { inject, injectable } from "tsyringe";

import { Ticket } from "../../../entities/Ticket";
import { TicketsRepository } from "../../../repositories/implementations/TicketsRepository";

interface IRequest {
  id: string;
  status: "pendente" | "progresso" | "concluido";
}

@injectable()
class UpdateTicketUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: TicketsRepository
  ) {}

  async execute({ id, status }: IRequest): Promise<Ticket> {
    const ticket = await this.ticketsRepository.update({ id, status });
    return ticket;
  }
}

export { UpdateTicketUseCase };
