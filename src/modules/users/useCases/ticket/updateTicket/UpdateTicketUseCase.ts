import { inject, injectable } from "tsyringe";

import { Ticket } from "../../../entities/Ticket";
import { ITicketsRepository } from "../../../repositories/ITicketsRespository";

interface IRequest {
  id: string;
  status: "pendente" | "progresso" | "concluido";
  will_solve?: string;
}

@injectable()
class UpdateTicketUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: ITicketsRepository
  ) {}

  async execute({ id, status, will_solve }: IRequest): Promise<Ticket> {
    const ticket = await this.ticketsRepository.update({
      id,
      status,
      will_solve,
    });
    return ticket;
  }
}

export { UpdateTicketUseCase };
