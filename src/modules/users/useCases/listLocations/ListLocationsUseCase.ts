import { LocationRepository } from "../../repositories/implementations/LocationRepository";

class ListLocationsUseCase {
  constructor(private locationsRepository: LocationRepository) {}

  execute(company_id: string) {
    const locations = this.locationsRepository.list(company_id);
    return locations;
  }
}

export { ListLocationsUseCase };
