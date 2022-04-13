import { Company } from "../../model/Company";
import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";

interface IRequest {
  name: string;
  cnpj: string;
  description: string;
  user: string;
}

class CreateCompanyUseCase {
  constructor(private companiesRepository: CompaniesRepository) {}

  execute({ name, cnpj, description, user }: IRequest): Company {
    const hasCompanyWithSameCnpj =
      this.companiesRepository.findCompanyByCnpj(cnpj);
    if (hasCompanyWithSameCnpj) {
      throw new Error("Company with this CNPJ alredy exists!");
    }

    const company = this.companiesRepository.create({
      name,
      cnpj,
      description,
      user,
    });

    return company;
  }
}

export { CreateCompanyUseCase };
