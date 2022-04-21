import { Router } from "express";

import { CreateResponsibleController } from "../modules/users/useCases/responsible/createResponsible/CreateResponsibleController";
import { ListResponsibleController } from "../modules/users/useCases/responsible/listResponsible/ListResponsibleController";

const responsaveisRouter = Router();

const createResponsibleController = new CreateResponsibleController();
const listResponsibleController = new ListResponsibleController();

responsaveisRouter.post("/", createResponsibleController.handle);
responsaveisRouter.get("/", listResponsibleController.handle);

export { responsaveisRouter };
