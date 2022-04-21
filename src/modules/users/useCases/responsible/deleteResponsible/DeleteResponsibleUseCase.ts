import { inject, injectable } from "tsyringe";

import { IResponsibleRepository } from "../../../repositories/IResponsibleRepository";

@injectable()
class DeleteResponsibleUseCase {
  constructor(
    @inject("ResponsibleRepository")
    private responsibleRepository: IResponsibleRepository
  ) {}

  async execute(id: string): Promise<string> {
    const deletedId = await this.responsibleRepository.delete(id);
    return deletedId;
  }
}

export { DeleteResponsibleUseCase };
