import { Router } from "express";

import { CreateTicketController } from "../modules/users/useCases/ticket/createTicket/CreateTicketController";
import { ListTicketsByLocationController } from "../modules/users/useCases/ticket/listTicketsByLocation/ListTicketsByLocationController";
import { UpdateTicketController } from "../modules/users/useCases/ticket/updateTicket/UpdateTicketController";

const ticketsRouter = Router();

const createTicketController = new CreateTicketController();
const listTicketsByLocationController = new ListTicketsByLocationController();
const updateTicketController = new UpdateTicketController();

ticketsRouter.post("/", createTicketController.handle);
ticketsRouter.get("/local", listTicketsByLocationController.handle);
ticketsRouter.put("/:id", updateTicketController.handle);

export { ticketsRouter };
