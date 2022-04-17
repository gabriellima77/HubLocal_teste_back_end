import { container } from "tsyringe";

import { ICompaniesRepository } from "../../modules/users/repositories/ICompaniesRepository";
import { ILocationRepository } from "../../modules/users/repositories/ILocationRepository";
import { CompaniesRepository } from "../../modules/users/repositories/implementations/CompaniesRepository";
import { LocationRepository } from "../../modules/users/repositories/implementations/LocationRepository";
import { UserRepository } from "../../modules/users/repositories/implementations/UserRepository";
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
