import { inject, injectable } from "tsyringe";

import { Location } from "../../entities/Location";
import { LocationRepository } from "../../repositories/implementations/LocationRepository";

@injectable()
class ListLocationsUseCase {
  constructor(
    @inject("LocationRepository")
    private locationsRepository: LocationRepository
  ) {}

  async execute(company_id: string): Promise<Location[]> {
    const locations = await this.locationsRepository.list(company_id);
    return locations;
  }
}

export { ListLocationsUseCase };
