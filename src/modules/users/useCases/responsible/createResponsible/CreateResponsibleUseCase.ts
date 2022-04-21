import { inject, injectable } from "tsyringe";

import { Location } from "../../../entities/Location";
import { IResponsibleRepository } from "../../../repositories/IResponsibleRepository";

interface IRequest {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  isMain: boolean;
  location: Location;
}

@injectable()
class CreateResponsibleUseCase {
  constructor(
    @inject("ResponsibleRepository")
    private responsibleRepository: IResponsibleRepository
  ) {}

  async execute(data: IRequest): Promise<void> {
    await this.responsibleRepository.create(data);
  }
}

export { CreateResponsibleUseCase };
