import { LocationRepository } from "../../repositories/implementations/LocationRepository";

interface IRequest {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
}

class UpdateLocationUseCase {
  constructor(private locationsRepository: LocationRepository) {}

  execute({ address, city, name, state, id }: IRequest) {
    const locationExists = this.locationsRepository.getLocation(id);
    if (!locationExists) {
      throw new Error("Location doesn't exists!");
    }
    const location = this.locationsRepository.update({
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
