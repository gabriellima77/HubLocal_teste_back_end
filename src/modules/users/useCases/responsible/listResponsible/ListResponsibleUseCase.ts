import { inject, injectable } from "tsyringe";

import { Responsible } from "../../../entities/Responsible";
import { IResponsibleRepository } from "../../../repositories/IResponsibleRepository";

@injectable()
class ListResponsibleUseCase {
  constructor(
    @inject("ResponsibleRepository")
    private responsibleRepository: IResponsibleRepository
  ) {}

  async execute(locationId: string): Promise<Responsible[]> {
    const responsible = await this.responsibleRepository.list(locationId);
    return responsible;
  }
}

export { ListResponsibleUseCase };
