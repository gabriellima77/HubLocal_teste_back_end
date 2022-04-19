import { inject, injectable } from "tsyringe";

import { Company } from "../../entities/Company";
import { LocationRepository } from "../../repositories/implementations/LocationRepository";

interface IRequest {
  name: string;
  address: string;
  city: string;
  state: string;
  company: Company;
}

@injectable()
class CreateLocationUseCase {
  constructor(
    @inject("LocationRepository")
    private locationRepository: LocationRepository
  ) {}

  async execute({
    name,
    address,
    city,
    state,
    company,
  }: IRequest): Promise<void> {
    await this.locationRepository.create({
      name,
      address,
      city,
      state,
      company,
    });
  }
}

export { CreateLocationUseCase };
