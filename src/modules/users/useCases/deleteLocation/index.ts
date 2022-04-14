import { LocationRepository } from "../../repositories/implementations/LocationRepository";
import { DeleteLocationController } from "./DeleteLocationController";
import { DeleteLocationUseCase } from "./DeleteLocationUseCase";

const locationRepository = LocationRepository.getInstance();
const deleteLocationUseCase = new DeleteLocationUseCase(locationRepository);
const deleteLocationController = new DeleteLocationController(
  deleteLocationUseCase
);

export { deleteLocationController };
