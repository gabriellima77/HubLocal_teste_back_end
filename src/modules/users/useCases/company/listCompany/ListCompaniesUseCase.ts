import { inject, injectable } from "tsyringe";

import { Company } from "../../../entities/Company";
import { ICompaniesRepository } from "../../../repositories/ICompaniesRepository";

@injectable()
class ListCompaniesUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute(user: string): Promise<Company[]> {
    const companies = await this.companiesRepository.list(user);
    return companies;
  }
}

export { ListCompaniesUseCase };
