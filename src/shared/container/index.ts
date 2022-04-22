import { container } from "tsyringe";

import { ICompaniesRepository } from "../../modules/users/repositories/ICompaniesRepository";
import { ILocationRepository } from "../../modules/users/repositories/ILocationRepository";
import { CompaniesRepository } from "../../modules/users/repositories/implementations/CompaniesRepository";
import { LocationRepository } from "../../modules/users/repositories/implementations/LocationRepository";
import { ResponsibleRepository } from "../../modules/users/repositories/implementations/ResponsibleRepository";
import { TicketsRepository } from "../../modules/users/repositories/implementations/TicketsRepository";
import { UserRepository } from "../../modules/users/repositories/implementations/UserRepository";
import { IResponsibleRepository } from "../../modules/users/repositories/IResponsibleRepository";
import { ITicketsRepository } from "../../modules/users/repositories/ITicketsRespository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ICompaniesRepository>(
  "CompaniesRepository",
  CompaniesRepository
);

container.registerSingleton<ILocationRepository>(
  "LocationRepository",
  LocationRepository
);

container.registerSingleton<IResponsibleRepository>(
  "ResponsibleRepository",
  ResponsibleRepository
);

container.registerSingleton<ITicketsRepository>(
  "TicketsRepository",
  TicketsRepository
);
