import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { ICompaniesRepository } from "../../../repositories/ICompaniesRepository";

@injectable()
class DeleteCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute(id: string): Promise<string> {
    const company = await this.companiesRepository.findCompanyById(id);
    if (!company) {
      throw new AppError("Company Doesn't exist!", 404);
    }
    const deletedId = await this.companiesRepository.delete(id);
    return deletedId;
  }
}

export { DeleteCompanyUseCase };
