import { Repository } from "typeorm";

import { dataSource } from "../../../../database";
import { Location } from "../../entities/Location";
import {
  ICreateLocationDTO,
  ILocationRepository,
  IUpdateLocationDTO,
} from "../ILocationRepository";

class LocationRepository implements ILocationRepository {
  private repository: Repository<Location>;

  constructor() {
    this.repository = dataSource.getRepository(Location);
  }

  async create({
    company,
    address,
    city,
    name,
    state,
  }: ICreateLocationDTO): Promise<void> {
    const location = this.repository.create({
      name,
      address,
      city,
      state,
      company,
    });
    await this.repository.save(location);
  }

  async list(company: string): Promise<Location[]> {
    const locations = this.repository.find({ where: { companyId: company } });
    return locations;
  }

  async getLocation(id: string): Promise<Location> {
    const location = await this.repository.findOne({ where: { id } });
    return location;
  }

  async update({
    address,
    city,
    name,
    state,
    id,
  }: IUpdateLocationDTO): Promise<Location> {
    const location = await this.repository.save({
      id,
      address,
      city,
      name,
      state,
    });
    return location;
  }

  async delete(id: string): Promise<string> {
    await this.repository.delete(id);
    return id;
  }
}

export { LocationRepository };
