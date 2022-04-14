import { LocationRepository } from "../../repositories/implementations/LocationRepository";
import { ListLocationsController } from "./ListLocationsController";
import { ListLocationsUseCase } from "./ListLocationsUseCase";

const locationsRepository = LocationRepository.getInstance();
const listLocationsUseCase = new ListLocationsUseCase(locationsRepository);
const listLocationsController = new ListLocationsController(
  listLocationsUseCase
);

export { listLocationsController };
