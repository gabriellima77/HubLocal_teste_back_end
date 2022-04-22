import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { validData } from "../../../../../utils/dataValidation";
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
    validData({ data: { status } });
    const isValidStatus = ["pendente", "progresso", "concluido"].includes(
      status
    );

    if (!isValidStatus) {
      throw new AppError("Status is not valid!", 400);
    }

    if (will_solve) {
      validData({ data: { will_solve } });
    }

    const ticket = await this.ticketsRepository.update({
      id,
      status,
      will_solve,
    });
    return ticket;
  }
}

export { UpdateTicketUseCase };
