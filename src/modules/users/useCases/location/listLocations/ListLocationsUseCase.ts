import { inject, injectable } from "tsyringe";

import { Location } from "../../../entities/Location";
import { ILocationRepository } from "../../../repositories/ILocationRepository";

@injectable()
class ListLocationsUseCase {
  constructor(
    @inject("LocationRepository")
    private locationsRepository: ILocationRepository
  ) {}

  async execute(company_id: string): Promise<Location[]> {
    const locations = await this.locationsRepository.list(company_id);
    return locations;
  }
}

export { ListLocationsUseCase };
