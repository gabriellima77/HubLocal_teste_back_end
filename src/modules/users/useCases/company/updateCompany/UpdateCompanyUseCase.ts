import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { validData } from "../../../../../utils/dataValidation";
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
    validData({ data: { name, description } });

    const hasCompany = await this.companiesRepository.findCompanyById(id);
    if (!hasCompany) {
      throw new AppError("Company doesn't exist!", 404);
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
