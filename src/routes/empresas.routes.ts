import { Router } from "express";

import { CompaniesRepository } from "../modules/users/repositories/implementations/CompaniesRepository";
import { createCompanyController } from "../modules/users/useCases/createCompany";
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

empresasRouter.post("/", (request, response) => {
  return createCompanyController.handle(request, response);
});

empresasRouter.use(checkIfCompanyExists);
empresasRouter.use("/locais", locaisRouter);

export { empresasRouter };
