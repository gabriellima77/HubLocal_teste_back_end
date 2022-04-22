import { inject, injectable } from "tsyringe";

import { Company } from "../../../entities/Company";
import { Location } from "../../../entities/Location";
import { ITicketsRepository } from "../../../repositories/ITicketsRespository";

interface IRequest {
  created_by: string;
  location: Location;
  will_solve: string;
  company: Company;
}

@injectable()
class CreateTicketUseCase {
  constructor(
    @inject("TicketsRepository")
    private ticketsRepository: ITicketsRepository
  ) {}

  async execute({
    company,
    created_by,
    location,
    will_solve,
  }: IRequest): Promise<void> {
    await this.ticketsRepository.create({
      company,
      created_by,
      location,
      will_solve,
    });
  }
}

export { CreateTicketUseCase };
