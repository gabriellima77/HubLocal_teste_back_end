import { Company } from "../entities/Company";
import { Location } from "../entities/Location";
import { Ticket } from "../entities/Ticket";

interface ICreateTicketDTO {
  created_by: string;
  will_solve: string;
  location: Location;
  company: Company;
}

interface IUpdateTicketDTO {
  status: "pendente" | "progresso" | "concluido";
  id: string;
}

interface ITicketsRepository {
  create(createData: ICreateTicketDTO): Promise<void>;
  list(location: string): Promise<Ticket[]>;
  getTicket(id: string): Promise<Ticket>;
  update(updateData: IUpdateTicketDTO): Promise<Ticket>;
  delete(id: string): Promise<string>;
}

export { ITicketsRepository, ICreateTicketDTO, IUpdateTicketDTO };
