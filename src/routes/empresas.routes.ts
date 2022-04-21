import { Router } from "express";

import { CreateCompanyController } from "../modules/users/useCases/company/createCompany/CreateCompanyController";
import { DeleteCompanyController } from "../modules/users/useCases/company/deleteCompany/DeleteCompanyController";
import { GetCompanyController } from "../modules/users/useCases/company/getCompany/GetCompanyController";
import { ListCompaniesController } from "../modules/users/useCases/company/listCompany/ListCompaniesController";
import { UpdateCompanyController } from "../modules/users/useCases/company/updateCompany/UpdateCompanyController";

const empresasRouter = Router();

const createCompanyController = new CreateCompanyController();
const deleteCompanyController = new DeleteCompanyController();
const listCompaniesController = new ListCompaniesController();
const updateCompanyController = new UpdateCompanyController();
const getCompanyController = new GetCompanyController();

empresasRouter.get("/", listCompaniesController.handle);

empresasRouter.post("/", createCompanyController.handle);

empresasRouter.get("/:id", getCompanyController.handle);

empresasRouter.put("/:id", updateCompanyController.handle);

empresasRouter.delete("/:id", deleteCompanyController.handle);

export { empresasRouter };
