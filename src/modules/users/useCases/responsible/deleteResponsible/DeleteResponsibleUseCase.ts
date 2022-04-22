import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { IResponsibleRepository } from "../../../repositories/IResponsibleRepository";

@injectable()
class DeleteResponsibleUseCase {
  constructor(
    @inject("ResponsibleRepository")
    private responsibleRepository: IResponsibleRepository
  ) {}

  async execute(id: string): Promise<string> {
    const responsible = await this.responsibleRepository.getResponsible(id);
    if (!responsible) {
      throw new AppError("Responsible doesn't exist!", 404);
    }

    const deletedId = await this.responsibleRepository.delete(id);
    return deletedId;
  }
}

export { DeleteResponsibleUseCase };
