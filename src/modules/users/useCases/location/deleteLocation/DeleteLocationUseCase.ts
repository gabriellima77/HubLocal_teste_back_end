import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { ILocationRepository } from "../../../repositories/ILocationRepository";

@injectable()
class DeleteLocationUseCase {
  constructor(
    @inject("LocationRepository")
    private locationsRepository: ILocationRepository
  ) {}

  async execute(id: string): Promise<string> {
    const locationExists = await this.locationsRepository.getLocation(id);
    if (!locationExists) {
      throw new AppError("Location doesn't exists!", 404);
    }
    const deletedId = await this.locationsRepository.delete(id);
    return deletedId;
  }
}

export { DeleteLocationUseCase };
