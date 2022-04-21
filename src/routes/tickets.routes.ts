import { Router } from "express";

import { CreateTicketController } from "../modules/users/useCases/ticket/createTicket/CreateTicketController";

const ticketsRouter = Router();

const createTicketController = new CreateTicketController();

ticketsRouter.post("/", createTicketController.handle);

export { ticketsRouter };
