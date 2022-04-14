import { LocationRepository } from "../../repositories/implementations/LocationRepository";

class DeleteLocationUseCase {
  constructor(private locationsRepository: LocationRepository) {}

  execute(id: string) {
    const locationExists = this.locationsRepository.getLocation(id);
    if (!locationExists) {
      throw new Error("Location doesn't exists!");
    }

    return this.locationsRepository.delete(id);
  }
}

export { DeleteLocationUseCase };
