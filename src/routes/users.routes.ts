import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";

const usersRouter = Router();

usersRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.end();
});

usersRouter.post("/signup", (req, res) => {
  return createUserController.handle(req, res);
});

usersRouter.get("/logout", (req, res) => {
  res.end();
});

export { usersRouter };
