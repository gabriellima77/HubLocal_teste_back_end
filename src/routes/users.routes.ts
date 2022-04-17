import { Router } from "express";

import { UserRepository } from "../modules/users/repositories/implementations/UserRepository";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { UserLoginController } from "../modules/users/useCases/userLogin/UserLoginController";
import { empresasRouter } from "./empresas.routes";

const usersRouter = Router();

function checkIfUserExists(request, response, next) {
  const { user_id } = request.headers;
  const repository = new UserRepository();
  const user = repository.findById(user_id);
  if (!user) {
    return response.status(400).json({ error: "User doesn't exist!" });
  }

  request.user = user;
  return next();
}

const userLoginController = new UserLoginController();
const createUserController = new CreateUserController();

usersRouter.post("/login", userLoginController.handle);

usersRouter.post("/signup", createUserController.handle);

usersRouter.get("/logout", checkIfUserExists, (request, response) => {
  response.end();
});

export { usersRouter };
