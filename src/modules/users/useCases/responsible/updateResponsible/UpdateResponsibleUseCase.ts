import { inject, injectable } from "tsyringe";

import { Responsible } from "../../../entities/Responsible";
import { IResponsibleRepository } from "../../../repositories/IResponsibleRepository";

interface IRequest {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  isMain: boolean;
}

@injectable()
class UpdateResponsibleUseCase {
  constructor(
    @inject("ResponsibleRepository")
    private responsibleRepository: IResponsibleRepository
  ) {}

  async execute(updateData: IRequest): Promise<Responsible> {
    const responsible = await this.responsibleRepository.update(updateData);
    return responsible;
  }
}

export { UpdateResponsibleUseCase };
