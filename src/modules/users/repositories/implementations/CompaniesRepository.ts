import { Repository } from "typeorm";

import { dataSource } from "../../../../database";
import { Company } from "../../entities/Company";
import { User } from "../../entities/User";
import {
  ICompaniesRepository,
  ICreateCompanyDTO,
  IUpdateCompanyDTO,
} from "../ICompaniesRepository";

class CompaniesRepository implements ICompaniesRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = dataSource.getRepository(Company);
  }

  async create({
    cnpj,
    description,
    name,
    user,
  }: ICreateCompanyDTO): Promise<string> {
    const company = this.repository.create({
      name,
      description,
      cnpj,
      user,
    });
    const { id } = await this.repository.save(company);
    return id;
  }

  async list(userId: string): Promise<Company[]> {
    const companies = await this.repository.find({
      where: { userId },
    });
    return companies;
  }

  async findCompanyByCnpj(cnpj: string): Promise<Company> {
    const company = await this.repository.findOne({ where: { cnpj } });
    return company;
  }

  async findCompanyById(id: string): Promise<Company> {
    const company = this.repository.findOne({ where: { id } });
    return company;
  }

  async delete(id: string): Promise<string> {
    await this.repository.delete(id);
    return id;
  }

  async update({ description, name, id }: IUpdateCompanyDTO): Promise<Company> {
    const company = await this.repository.save({
      id,
      name,
      description,
    });

    return company;
  }
}

export { CompaniesRepository };
