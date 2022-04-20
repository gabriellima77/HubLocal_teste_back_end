import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";

interface IRequest {
  name: string;
  cnpj: string;
  description: string;
  user: User;
}

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: CompaniesRepository
  ) {}

  async execute({ name, cnpj, description, user }: IRequest): Promise<string> {
    const hasCompanyWithSameCnpj =
      await this.companiesRepository.findCompanyByCnpj(cnpj);
    if (hasCompanyWithSameCnpj) {
      throw new Error("Company with this CNPJ alredy exists!");
    }

    const id = await this.companiesRepository.create({
      name,
      cnpj,
      description,
      user,
    });

    return id;
  }
}

export { CreateCompanyUseCase };
