import { inject, injectable } from "tsyringe";

import { Company } from "../../../entities/Company";
import { ICompaniesRepository } from "../../../repositories/ICompaniesRepository";

interface IRequest {
  name: string;
  description: string;
  id: string;
}

@injectable()
class UpdateCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute({ name, description, id }: IRequest): Promise<Company> {
    const hasCompany = await this.companiesRepository.findCompanyById(id);
    if (!hasCompany) {
      throw new Error("Company doesn't exist!");
    }
    const company = await this.companiesRepository.update({
      description,
      id,
      name,
    });
    return company;
  }
}

export { UpdateCompanyUseCase };
