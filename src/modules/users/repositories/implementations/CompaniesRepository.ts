import { Company } from "../../model/Company";
import {
  ICompaniesRepository,
  ICreateCompanyDTO,
} from "../ICompaniesRepository";

class CompaniesRepository implements ICompaniesRepository {
  private companies: Company[];
  private static INSTANCE: CompaniesRepository;

  constructor() {
    this.companies = [];
  }

  public static getInstance(): CompaniesRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new CompaniesRepository();
    }

    return this.INSTANCE;
  }

  create({ cnpj, description, name, user }: ICreateCompanyDTO): Company {
    const company = new Company();
    Object.assign(company, { cnpj, description, name, user });

    this.companies.push(company);
    return company;
  }

  list(): Company[] {
    return this.companies;
  }

  getCompaniesByUser(userId: string): Company[] {
    return this.companies.filter((company) => company.user === userId);
  }

  findCompanyByCnpj(cnpj: string): Company {
    return this.companies.find((company) => company.cnpj === cnpj);
  }

  findCompanyById(id: string): Company {
    return this.companies.find((company) => company.id === id);
  }
}

export { CompaniesRepository };
