import { inject, injectable } from "tsyringe";

import { Location } from "../../entities/Location";
import { LocationRepository } from "../../repositories/implementations/LocationRepository";

interface IRequest {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
}

@injectable()
class UpdateLocationUseCase {
  constructor(
    @inject("LocationRepository")
    private locationsRepository: LocationRepository
  ) {}

  async execute({
    address,
    city,
    name,
    state,
    id,
  }: IRequest): Promise<Location> {
    const locationExists = await this.locationsRepository.getLocation(id);
    if (!locationExists) {
      throw new Error("Location doesn't exists!");
    }
    const location = await this.locationsRepository.update({
      address,
      city,
      name,
      state,
      id,
    });

    return location;
  }
}

export { UpdateLocationUseCase };
