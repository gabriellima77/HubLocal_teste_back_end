import { inject, injectable } from "tsyringe";

import { LocationRepository } from "../../repositories/implementations/LocationRepository";

@injectable()
class DeleteLocationUseCase {
  constructor(
    @inject("LocationRepository")
    private locationsRepository: LocationRepository
  ) {}

  async execute(id: string): Promise<string> {
    const locationExists = await this.locationsRepository.getLocation(id);
    if (!locationExists) {
      throw new Error("Location doesn't exists!");
    }
    const deletedId = await this.locationsRepository.delete(id);
    return deletedId;
  }
}

export { DeleteLocationUseCase };
