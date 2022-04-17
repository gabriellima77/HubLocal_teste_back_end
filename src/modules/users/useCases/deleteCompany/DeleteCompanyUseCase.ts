import { inject, injectable } from "tsyringe";

import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";

@injectable()
class DeleteCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: CompaniesRepository
  ) {}

  async execute(id: string): Promise<string> {
    const company = await this.companiesRepository.findCompanyById(id);
    if (!company) {
      throw new Error("Company Doesn't exist!");
    }
    const deletedId = await this.companiesRepository.delete(id);
    return deletedId;
  }
}

export { DeleteCompanyUseCase };
