import { Location } from "../model/Location";

interface ICreateLocationDTO {
  name: string;
  address: string;
  city: string;
  state: string;
}

interface IUpdateLocationDTO extends ICreateLocationDTO {
  id: string;
}

interface ILocationRepository {
  create: (createData: ICreateLocationDTO) => Location;
  list: (company: string) => Location[];
  getLocation: (id: string) => Location;
  update: (update: IUpdateLocationDTO) => Location;
  delete: (id: string) => string;
}

export { ILocationRepository, ICreateLocationDTO, IUpdateLocationDTO };
