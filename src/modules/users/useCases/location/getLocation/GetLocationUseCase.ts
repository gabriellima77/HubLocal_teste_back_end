import { inject, injectable } from "tsyringe";

import { Location } from "../../../entities/Location";
import { ILocationRepository } from "../../../repositories/ILocationRepository";

@injectable()
class GetLocationUseCase {
  constructor(
    @inject("LocationRepository")
    private locationRepository: ILocationRepository
  ) {}

  async execute(id: string): Promise<Location> {
    const location = await this.locationRepository.getLocation(id);
    return location;
  }
}

export { GetLocationUseCase };
