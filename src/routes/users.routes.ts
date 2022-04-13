import { Router } from "express";

import { UserRepository } from "../modules/users/repositories/implementations/UserRepository";
import { createUserController } from "../modules/users/useCases/createUser";
import { userLoginController } from "../modules/users/useCases/userLogin";
import { empresasRouter } from "./empresas.routes";

const usersRouter = Router();

function checkIfUserExists(request, response, next) {
  const { user_id } = request.headers;
  const users = UserRepository.getInstace();
  const userExists = users.findById(String(user_id));
  if (!userExists) {
    return response.status(400).json({ error: "User doesn't exist!" });
  }

  request.user = userExists;
  return next();
}

usersRouter.use("/empresas", checkIfUserExists, empresasRouter);

usersRouter.post("/login", (request, response) => {
  return userLoginController.handle(request, response);
});

usersRouter.post("/signup", (request, response) => {
  return createUserController.handle(request, response);
});

usersRouter.get("/logout", checkIfUserExists, (request, response) => {
  response.end();
});

export { usersRouter };
