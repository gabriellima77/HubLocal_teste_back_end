import { Company } from "../entities/Company";

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
  create: (companyInfo: ICreateCompanyDTO) => Promise<void>;
  list: (userId: string) => Promise<Company[]>;
  findCompanyByCnpj: (cnpj: string) => Promise<Company>;
  findCompanyById: (id: string) => Promise<Company>;
  update: (update: IUpdateCompanyDTO) => Promise<Company>;
  delete: (id: string) => Promise<string>;
}

export { ICompaniesRepository, ICreateCompanyDTO, IUpdateCompanyDTO };
