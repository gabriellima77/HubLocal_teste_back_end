import { Router } from "express";

import { checkIfLocationExists } from "../middlewares/checkIfLocationExists";
import { CreateTicketController } from "../modules/users/useCases/ticket/createTicket/CreateTicketController";
import { DeleteTicketController } from "../modules/users/useCases/ticket/deleteTicket/DeleteTicketController";
import { ListTicketsController } from "../modules/users/useCases/ticket/listTickets/ListTicketsController";
import { ListTicketsByLocationController } from "../modules/users/useCases/ticket/listTicketsByLocation/ListTicketsByLocationController";
import { UpdateTicketController } from "../modules/users/useCases/ticket/updateTicket/UpdateTicketController";

const ticketsRouter = Router();

const createTicketController = new CreateTicketController();
const listTicketsController = new ListTicketsController();
const listTicketsByLocationController = new ListTicketsByLocationController();
const updateTicketController = new UpdateTicketController();
const deleteTicketController = new DeleteTicketController();

ticketsRouter.post("/", checkIfLocationExists, createTicketController.handle);
ticketsRouter.get("/", listTicketsController.handle);
ticketsRouter.get(
  "/local",
  checkIfLocationExists,
  listTicketsByLocationController.handle
);
ticketsRouter.put("/:id", checkIfLocationExists, updateTicketController.handle);
ticketsRouter.delete(
  "/:id",
  checkIfLocationExists,
  deleteTicketController.handle
);

export { ticketsRouter };
