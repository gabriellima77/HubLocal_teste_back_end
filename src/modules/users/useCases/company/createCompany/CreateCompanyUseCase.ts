import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { validData } from "../../../../../utils/dataValidation";
import { User } from "../../../entities/User";
import { ICompaniesRepository } from "../../../repositories/ICompaniesRepository";

interface IRequest {
  name: string;
  cnpj: string;
  description: string;
  user: User;
}

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  private validCnpj(cnpj: string): boolean {
    if (cnpj.length !== 14) return false;

    if (cnpj.match(/[^0-9]/g)) return false;
    return true;
  }

  async execute({ name, cnpj, description, user }: IRequest): Promise<string> {
    validData({
      data: { name, cnpj, description },
    });

    if (!cnpj) {
      throw new AppError("CNPJ is required!", 400);
    }
    if (!this.validCnpj(cnpj)) {
      throw new AppError("CNPJ is not valid!", 400);
    }

    const hasCompanyWithSameCnpj =
      await this.companiesRepository.findCompanyByCnpj(cnpj);

    if (hasCompanyWithSameCnpj) {
      throw new AppError("Company with this CNPJ alredy exists!", 400);
    }

    const id = await this.companiesRepository.create({
      name,
      cnpj,
      description,
      user,
    });

    return id;
  }
}

export { CreateCompanyUseCase };
