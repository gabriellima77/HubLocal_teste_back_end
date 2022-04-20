import { Company } from "../entities/Company";
import { Location } from "../entities/Location";

interface ICreateLocationDTO {
  company: Company;
  name: string;
  address: string;
  city: string;
  state: string;
}

interface IUpdateLocationDTO {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
}

interface ILocationRepository {
  create: (createData: ICreateLocationDTO) => Promise<string>;
  list: (company: string) => Promise<Location[]>;
  getLocation: (id: string) => Promise<Location>;
  update: (update: IUpdateLocationDTO) => Promise<Location>;
  delete: (id: string) => Promise<string>;
}

export { ILocationRepository, ICreateLocationDTO, IUpdateLocationDTO };
