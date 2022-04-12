import { Company } from "../model/Company";

interface ICreateCompanyDTO {
  name: string;
  cnpj: string;
  description: string;
  user: string;
}

interface ICompaniesRepository {
  create: (companyInfo: ICreateCompanyDTO) => Company;
  list: () => Company[];
  getCompaniesByUser: (userId: string) => Company[];
  findCompanyByCnpj: (cnpj: string) => Company;
  findCompanyById: (id: string) => Company;
}

export { ICompaniesRepository, ICreateCompanyDTO };
