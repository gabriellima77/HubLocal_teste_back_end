import { Router } from "express";

import { CreateResponsibleController } from "../modules/users/useCases/responsible/createResponsible/CreateResponsibleController";
import { DeleteResponsibleController } from "../modules/users/useCases/responsible/deleteResponsible/DeleteResponsibleController";
import { ListResponsibleController } from "../modules/users/useCases/responsible/listResponsible/ListResponsibleController";
import { UpdateResponsibleController } from "../modules/users/useCases/responsible/updateResponsible/UpdateResponsibleController";

const responsaveisRouter = Router();

const createResponsibleController = new CreateResponsibleController();
const listResponsibleController = new ListResponsibleController();
const deleteResponsibleController = new DeleteResponsibleController();
const updateResponsibleController = new UpdateResponsibleController();

responsaveisRouter.post("/", createResponsibleController.handle);
responsaveisRouter.get("/", listResponsibleController.handle);
responsaveisRouter.delete("/:id", deleteResponsibleController.handle);
responsaveisRouter.put("/:id", updateResponsibleController.handle);

export { responsaveisRouter };
