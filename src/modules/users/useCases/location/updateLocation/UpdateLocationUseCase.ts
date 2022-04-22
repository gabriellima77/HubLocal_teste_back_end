import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { validData } from "../../../../../utils/dataValidation";
import { Location } from "../../../entities/Location";
import { ILocationRepository } from "../../../repositories/ILocationRepository";

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
    private locationsRepository: ILocationRepository
  ) {}

  async execute({
    address,
    city,
    name,
    state,
    id,
  }: IRequest): Promise<Location> {
    validData({
      data: { address, city, name, state },
    });

    const locationExists = await this.locationsRepository.getLocation(id);
    if (!locationExists) {
      throw new AppError("Location doesn't exists!", 404);
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
