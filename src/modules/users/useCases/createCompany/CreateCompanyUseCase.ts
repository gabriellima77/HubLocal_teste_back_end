import { inject, injectable } from "tsyringe";

import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";

interface IRequest {
  name: string;
  cnpj: string;
  description: string;
  user: string;
}

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: CompaniesRepository
  ) {}

  async execute({ name, cnpj, description, user }: IRequest): Promise<void> {
    const hasCompanyWithSameCnpj =
      await this.companiesRepository.findCompanyByCnpj(cnpj);
    if (hasCompanyWithSameCnpj) {
      throw new Error("Company with this CNPJ alredy exists!");
    }

    await this.companiesRepository.create({
      name,
      cnpj,
      description,
      user,
    });
  }
}

export { CreateCompanyUseCase };
