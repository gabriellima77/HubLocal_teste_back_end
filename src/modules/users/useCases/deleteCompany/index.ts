import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";
import { DeleteCompanyController } from "./DeleteCompanyController";
import { DeleteCompanyUseCase } from "./DeleteCompanyUseCase";

const companiesRepository = CompaniesRepository.getInstance();
const deleteCompanyUseCase = new DeleteCompanyUseCase(companiesRepository);
const deleteCompanyController = new DeleteCompanyController(
  deleteCompanyUseCase
);

export { deleteCompanyController };
