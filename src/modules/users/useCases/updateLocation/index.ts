import { LocationRepository } from "../../repositories/implementations/LocationRepository";
import { UpdateLocationController } from "./UpdateLocationController";
import { UpdateLocationUseCase } from "./UpdateLocationUseCase";

const locationRepository = LocationRepository.getInstance();
const updateLocationUseCase = new UpdateLocationUseCase(locationRepository);
const updateLocationController = new UpdateLocationController(
  updateLocationUseCase
);

export { updateLocationController };
