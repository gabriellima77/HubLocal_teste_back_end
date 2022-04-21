import { inject, injectable } from "tsyringe";

import { Company } from "../../../entities/Company";
import { ICompaniesRepository } from "../../../repositories/ICompaniesRepository";

@injectable()
class GetCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute(id: string): Promise<Company> {
    const company = await this.companiesRepository.findCompanyById(id);
    return company;
  }
}

export { GetCompanyUseCase };
