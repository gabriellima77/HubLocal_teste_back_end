import { Router } from "express";

import { createLocationController } from "../modules/users/useCases/createLocation";

const locaisRouter = Router();

locaisRouter.post("/", (request, response) => {
  return createLocationController.handle(request, response);
});

export { locaisRouter };
