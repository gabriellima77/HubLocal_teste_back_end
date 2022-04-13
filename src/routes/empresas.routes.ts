import { Router } from "express";

import { CompaniesRepository } from "../modules/users/repositories/implementations/CompaniesRepository";
import { createCompanyController } from "../modules/users/useCases/createCompany";
import { deleteCompanyController } from "../modules/users/useCases/deleteCompany";
import { listCompaniesController } from "../modules/users/useCases/listCompany";
import { updateCompanyController } from "../modules/users/useCases/updateCompany";
import { locaisRouter } from "./locais.routes";

const empresasRouter = Router();

function checkIfCompanyExists(request, response, next) {
  const { company_id } = request.headers;
  const companyRepository = CompaniesRepository.getInstance();
  const existCompany = companyRepository.findCompanyById(String(company_id));
  if (!existCompany) {
    return response.status(400).json({ error: "Company doesn't exist!" });
  }
  request.company = existCompany;
  return next();
}

empresasRouter.get("/", (request, response) => {
  return listCompaniesController.handle(request, response);
});

empresasRouter.post("/", (request, response) => {
  return createCompanyController.handle(request, response);
});

empresasRouter.put("/:id", (request, response) => {
  return updateCompanyController.handle(request, response);
});

empresasRouter.delete("/:id", (request, response) => {
  return deleteCompanyController.handle(request, response);
});

empresasRouter.use(checkIfCompanyExists);
empresasRouter.use("/locais", locaisRouter);

export { empresasRouter };
