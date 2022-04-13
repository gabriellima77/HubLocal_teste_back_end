import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";

class ListCompaniesUseCase {
  constructor(private companiesRepository: CompaniesRepository) {}

  execute(user_id: string) {
    const companies = this.companiesRepository.list(user_id);
    return companies;
  }
}

export { ListCompaniesUseCase };
