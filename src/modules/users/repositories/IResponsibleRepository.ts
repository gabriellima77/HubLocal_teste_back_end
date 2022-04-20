import { Location } from "../entities/Location";
import { Responsible } from "../entities/Responsible";

interface IUpdateResponsibleDTO {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  isMain: boolean;
}

interface ICreateResponsibleDTO {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  isMain: boolean;
  location: Location;
}

interface IResponsibleRepository {
  create(createData: ICreateResponsibleDTO): Promise<void>;
  list(location: string): Promise<Responsible[]>;
  getResponsible(id: string): Promise<Responsible>;
  update(updateData: IUpdateResponsibleDTO): Promise<Responsible>;
  delete(id: string): Promise<string>;
}

export { IResponsibleRepository, ICreateResponsibleDTO, IUpdateResponsibleDTO };
