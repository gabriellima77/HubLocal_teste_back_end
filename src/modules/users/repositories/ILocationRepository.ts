import { Location } from "../model/Location";

interface ICreateLocationDTO {
  company: string;
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
  create: (createData: ICreateLocationDTO) => Location;
  list: (company: string) => Location[];
  getLocation: (id: string) => Location;
  update: (update: IUpdateLocationDTO) => Location;
  delete: (id: string) => string;
}

export { ILocationRepository, ICreateLocationDTO, IUpdateLocationDTO };
