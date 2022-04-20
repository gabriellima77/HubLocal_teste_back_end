import { Company } from "../entities/Company";
import { User } from "../entities/User";

interface ICreateCompanyDTO {
  name: string;
  cnpj: string;
  description: string;
  user: User;
}

interface IUpdateCompanyDTO {
  id: string;
  name: string;
  description: string;
}

interface ICompaniesRepository {
  create: (companyInfo: ICreateCompanyDTO) => Promise<string>;
  list: (userId: string) => Promise<Company[]>;
  findCompanyByCnpj: (cnpj: string) => Promise<Company>;
  findCompanyById: (id: string) => Promise<Company>;
  update: (update: IUpdateCompanyDTO) => Promise<Company>;
  delete: (id: string) => Promise<string>;
}

export { ICompaniesRepository, ICreateCompanyDTO, IUpdateCompanyDTO };
