import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";

interface IRequest {
  name: string;
  description: string;
  id: string;
}

class UpdateCompanyUseCase {
  constructor(private companiesRepository: CompaniesRepository) {}

  execute({ name, description, id }: IRequest) {
    const hasCompany = this.companiesRepository.findCompanyById(id);
    if (!hasCompany) {
      throw new Error("Company doesn't exist!");
    }
    const company = this.companiesRepository.update({ name, description, id });
    return company;
  }
}

export { UpdateCompanyUseCase };
