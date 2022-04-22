import { inject, injectable } from "tsyringe";

import { validData } from "../../../../../utils/dataValidation";
import { Company } from "../../../entities/Company";
import { ILocationRepository } from "../../../repositories/ILocationRepository";

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
    private locationRepository: ILocationRepository
  ) {}

  async execute({
    name,
    address,
    city,
    state,
    company,
  }: IRequest): Promise<string> {
    validData({
      data: { name, address, city, state },
    });

    const id = await this.locationRepository.create({
      name,
      address,
      city,
      state,
      company,
    });

    return id;
  }
}

export { CreateLocationUseCase };
