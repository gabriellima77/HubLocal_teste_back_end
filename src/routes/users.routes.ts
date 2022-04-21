import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/users/createUser/CreateUserController";
import { UserAuthenticatedController } from "../modules/users/useCases/users/userAuthenticated/UserAuthenticatedController";
import { UserLoginController } from "../modules/users/useCases/users/userLogin/UserLoginController";

const usersRouter = Router();

const userLoginController = new UserLoginController();
const createUserController = new CreateUserController();
const userAuthenticatedController = new UserAuthenticatedController();

usersRouter.post("/login", userLoginController.handle);

usersRouter.post("/signup", createUserController.handle);

usersRouter.post("/getUserByToken", userAuthenticatedController.handle);

export { usersRouter };
