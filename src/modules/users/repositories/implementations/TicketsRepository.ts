import { Repository } from "typeorm";

import { dataSource } from "../../../../database";
import { Ticket } from "../../entities/Ticket";
import {
  ICreateTicketDTO,
  ITicketsRepository,
  IUpdateTicketDTO,
} from "../ITicketsRespository";

class TicketsRepository implements ITicketsRepository {
  private respository: Repository<Ticket>;

  constructor() {
    this.respository = dataSource.getRepository(Ticket);
  }

  async create({
    created_by,
    location,
    will_solve,
    company,
  }: ICreateTicketDTO): Promise<void> {
    const ticket = this.respository.create({
      created_by,
      location,
      company,
      will_solve,
      status: "pendente",
    });
    ticket.title = ticket.id + location.name;
    await this.respository.save(ticket);
  }

  async list(company: string): Promise<Ticket[]> {
    const tickets = await this.respository.find({
      where: {
        companyId: company,
      },
    });
    return tickets;
  }

  async listLocationTickets(location: string): Promise<Ticket[]> {
    const tickets = await this.respository.find({
      where: {
        locationId: location,
      },
    });
    return tickets;
  }

  async getTicket(id: string): Promise<Ticket> {
    const ticket = await this.respository.findOne({ where: { id } });
    return ticket;
  }

  async update({ status, id, will_solve }: IUpdateTicketDTO): Promise<Ticket> {
    const update = { status, id };
    if (will_solve) {
      Object.assign(update, { will_solve });
    }
    const ticket = await this.respository.save(update);
    return ticket;
  }

  async delete(id: string): Promise<string> {
    await this.respository.delete(id);
    return id;
  }
}

export { TicketsRepository };
