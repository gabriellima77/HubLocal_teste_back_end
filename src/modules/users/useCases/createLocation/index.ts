import { LocationRepository } from "../../repositories/implementations/LocationRepository";
import { CreateLocationController } from "./CreateLocationController";
import { CreateLocationUseCase } from "./CreateLocationUseCase";

const locationRepository = LocationRepository.getInstance();
const createLocationUseCase = new CreateLocationUseCase(locationRepository);
const createLocationController = new CreateLocationController(
  createLocationUseCase
);

export { createLocationController };
