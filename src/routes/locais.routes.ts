import { Router } from "express";

import { createLocationController } from "../modules/users/useCases/createLocation";
import { deleteLocationController } from "../modules/users/useCases/deleteLocation";
import { listLocationsController } from "../modules/users/useCases/listLocations";
import { updateLocationController } from "../modules/users/useCases/updateLocation";

const locaisRouter = Router();

locaisRouter.get("/", (request, response) => {
  return listLocationsController.handle(request, response);
});

locaisRouter.post("/", (request, response) => {
  return createLocationController.handle(request, response);
});

locaisRouter.put("/:id", (request, response) => {
  return updateLocationController.handle(request, response);
});

locaisRouter.delete("/:id", (request, response) => {
  return deleteLocationController.handle(request, response);
});

export { locaisRouter };
