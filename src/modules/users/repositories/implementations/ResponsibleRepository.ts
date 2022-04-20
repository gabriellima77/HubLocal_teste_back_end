import { Repository } from "typeorm";

import { dataSource } from "../../../../database";
import { Responsible } from "../../entities/Responsible";
import {
  ICreateResponsibleDTO,
  IResponsibleRepository,
  IUpdateResponsibleDTO,
} from "../IResponsibleRepository";

class ResponsibleRepository implements IResponsibleRepository {
  private repository: Repository<Responsible>;

  constructor() {
    this.repository = dataSource.getRepository(Responsible);
  }

  async create(createData: ICreateResponsibleDTO): Promise<void> {
    const responsible = this.repository.create(createData);
    await this.repository.save(responsible);
  }

  async list(location: string): Promise<Responsible[]> {
    const responsible = await this.repository.find({
      where: { locationId: location },
    });
    return responsible;
  }

  async getResponsible(id: string): Promise<Responsible> {
    const responsible = await this.repository.findOne({ where: { id } });
    return responsible;
  }

  async update(updateData: IUpdateResponsibleDTO): Promise<Responsible> {
    const responsible = await this.repository.save(updateData);
    return responsible;
  }

  async delete(id: string): Promise<string> {
    await this.repository.delete(id);
    return id;
  }
}

export { ResponsibleRepository };
