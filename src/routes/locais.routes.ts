import { Router } from "express";

import { CreateLocationController } from "../modules/users/useCases/createLocation/CreateLocationController";
import { DeleteLocationController } from "../modules/users/useCases/deleteLocation/DeleteLocationController";
import { ListLocationsController } from "../modules/users/useCases/listLocations/ListLocationsController";
import { UpdateLocationController } from "../modules/users/useCases/updateLocation/UpdateLocationController";

const locaisRouter = Router();

const createLocationController = new CreateLocationController();
const deleteLocationController = new DeleteLocationController();
const listLocationsController = new ListLocationsController();
const updateLocationController = new UpdateLocationController();

locaisRouter.get("/", listLocationsController.handle);

locaisRouter.post("/", createLocationController.handle);

locaisRouter.put("/:id", updateLocationController.handle);

locaisRouter.delete("/:id", deleteLocationController.handle);

export { locaisRouter };
