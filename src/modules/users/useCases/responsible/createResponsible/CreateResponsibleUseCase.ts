import { inject, injectable } from "tsyringe";

import { validData, validPhone } from "../../../../../utils/dataValidation";
import { Location } from "../../../entities/Location";
import { IResponsibleRepository } from "../../../repositories/IResponsibleRepository";

interface IRequest {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  isMain: boolean;
  location: Location;
}

@injectable()
class CreateResponsibleUseCase {
  constructor(
    @inject("ResponsibleRepository")
    private responsibleRepository: IResponsibleRepository
  ) {}

  async execute(data: IRequest): Promise<void> {
    const { name, address, phone, city, state } = data;
    validData({
      data: { name, address, city, state },
    });
    validPhone(phone);

    await this.responsibleRepository.create(data);
  }
}

export { CreateResponsibleUseCase };
