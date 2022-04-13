import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";

class DeleteCompanyUseCase {
  constructor(private companiesRepository: CompaniesRepository) {}

  execute(id: string) {
    const company = this.companiesRepository.findCompanyById(id);
    if (!company) {
      throw new Error("Company Doesn't exist!");
    }
    this.companiesRepository.delete(id);
    return id;
  }
}

export { DeleteCompanyUseCase };
