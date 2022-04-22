import { inject, injectable } from "tsyringe";

import { ITicketsRepository } from "../../../repositories/ITicketsRespository";

@injectable()
class DeleteTicketUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: ITicketsRepository
  ) {}

  async execute(id: string): Promise<string> {
    const deletedId = this.ticketsRepository.delete(id);
    return deletedId;
  }
}

export { DeleteTicketUseCase };
