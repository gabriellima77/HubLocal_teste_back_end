import { inject, injectable } from "tsyringe";

import { Company } from "../../entities/Company";
import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";

@injectable()
class ListCompaniesUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: CompaniesRepository
  ) {}

  async execute(user_id: string): Promise<Company[]> {
    const companies = await this.companiesRepository.list(user_id);
    return companies;
  }
}

export { ListCompaniesUseCase };
