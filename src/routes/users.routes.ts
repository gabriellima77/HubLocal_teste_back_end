import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { userLoginController } from "../modules/users/useCases/userLogin";

const usersRouter = Router();

usersRouter.post("/login", (request, response) => {
  return userLoginController.handle(request, response);
});

usersRouter.post("/signup", (request, response) => {
  return createUserController.handle(request, response);
});

usersRouter.get("/logout", (request, response) => {
  response.end();
});

export { usersRouter };
