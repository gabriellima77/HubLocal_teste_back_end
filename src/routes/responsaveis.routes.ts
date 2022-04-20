import { Router } from "express";

import { CreateResponsibleController } from "../modules/users/useCases/createResponsible/CreateResponsibleController";

const responsaveisRouter = Router();

const createResponsibleController = new CreateResponsibleController();

responsaveisRouter.post("/", createResponsibleController.handle);

export { responsaveisRouter };
