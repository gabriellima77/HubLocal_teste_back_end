import { Router } from "express";

import { CompaniesRepository } from "../modules/users/repositories/implementations/CompaniesRepository";
import { CreateCompanyController } from "../modules/users/useCases/createCompany/CreateCompanyController";
import { DeleteCompanyController } from "../modules/users/useCases/deleteCompany/DeleteCompanyController";
import { ListCompaniesController } from "../modules/users/useCases/listCompany/ListCompaniesController";
import { UpdateCompanyController } from "../modules/users/useCases/updateCompany/UpdateCompanyController";
import { locaisRouter } from "./locais.routes";

const empresasRouter = Router();

function checkIfCompanyExists(request, response, next) {
  const { company_id } = request.headers;
  const repository = new CompaniesRepository();
  const company = repository.findCompanyById(company_id);
  if (!company) {
    return response.status(400).json({ error: "Company doesn't exist!" });
  }
  request.company = company;
  return next();
}

const createCompanyController = new CreateCompanyController();
const deleteCompanyController = new DeleteCompanyController();
const listCompaniesController = new ListCompaniesController();
const updateCompanyController = new UpdateCompanyController();

empresasRouter.get("/", listCompaniesController.handle);

empresasRouter.post("/", createCompanyController.handle);

empresasRouter.put("/:id", updateCompanyController.handle);

empresasRouter.delete("/:id", deleteCompanyController.handle);

empresasRouter.use(checkIfCompanyExists);
empresasRouter.use("/locais", locaisRouter);

export { empresasRouter };
