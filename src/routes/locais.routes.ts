import { Router } from "express";

import { CreateLocationController } from "../modules/users/useCases/location/createLocation/CreateLocationController";
import { DeleteLocationController } from "../modules/users/useCases/location/deleteLocation/DeleteLocationController";
import { GetLocationController } from "../modules/users/useCases/location/getLocation/GetLocationController";
import { ListLocationsController } from "../modules/users/useCases/location/listLocations/ListLocationsController";
import { UpdateLocationController } from "../modules/users/useCases/location/updateLocation/UpdateLocationController";

const locaisRouter = Router();

const createLocationController = new CreateLocationController();
const getLocationController = new GetLocationController();
const deleteLocationController = new DeleteLocationController();
const listLocationsController = new ListLocationsController();
const updateLocationController = new UpdateLocationController();

locaisRouter.get("/", listLocationsController.handle);

locaisRouter.post("/", createLocationController.handle);

locaisRouter.get("/:id", getLocationController.handle);

locaisRouter.put("/:id", updateLocationController.handle);

locaisRouter.delete("/:id", deleteLocationController.handle);

export { locaisRouter };
