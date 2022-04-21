import { Router } from "express";

import { CreateTicketController } from "../modules/users/useCases/ticket/createTicket/CreateTicketController";
import { ListTicketsByLocationController } from "../modules/users/useCases/ticket/listTicketsByLocation/ListTicketsByLocationController";

const ticketsRouter = Router();

const createTicketController = new CreateTicketController();
const listTicketsByLocationController = new ListTicketsByLocationController();

ticketsRouter.post("/", createTicketController.handle);
ticketsRouter.get("/local", listTicketsByLocationController.handle);

export { ticketsRouter };
