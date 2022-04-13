import { Company } from "../model/Company";

interface ICreateCompanyDTO {
  name: string;
  cnpj: string;
  description: string;
  user: string;
}

interface IUpdateCompanyDTO {
  id: string;
  name: string;
  description: string;
}

interface ICompaniesRepository {
  create: (companyInfo: ICreateCompanyDTO) => Company;
  list: () => Company[];
  getCompaniesByUser: (userId: string) => Company[];
  findCompanyByCnpj: (cnpj: string) => Company;
  findCompanyById: (id: string) => Company;
  update: (update: IUpdateCompanyDTO) => Company;
  delete: (id: string) => string;
}

export { ICompaniesRepository, ICreateCompanyDTO, IUpdateCompanyDTO };
