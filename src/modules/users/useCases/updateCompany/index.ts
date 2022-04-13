import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";
import { UpdateCompanyController } from "./UpdateCompanyController";
import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

const companiesRepository = CompaniesRepository.getInstance();
const updateCompanyUseCase = new UpdateCompanyUseCase(companiesRepository);
const updateCompanyController = new UpdateCompanyController(
  updateCompanyUseCase
);

export { updateCompanyController };
