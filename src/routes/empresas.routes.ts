import { Router } from "express";

import { createCompanyController } from "../modules/users/useCases/createCompany";

const empresasRouter = Router();

empresasRouter.post("/", (request, response) => {
  return createCompanyController.handle(request, response);
});

export { empresasRouter };
