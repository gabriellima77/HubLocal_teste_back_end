import { Location } from "../../model/Location";
import { LocationRepository } from "../../repositories/implementations/LocationRepository";

interface IRequest {
  name: string;
  address: string;
  city: string;
  state: string;
  company: string;
}

class CreateLocationUseCase {
  constructor(private locationRepository: LocationRepository) {}

  execute({ name, address, city, state, company }: IRequest): Location {
    const location = this.locationRepository.create({
      name,
      address,
      city,
      state,
      company,
    });

    return location;
  }
}

export { CreateLocationUseCase };
