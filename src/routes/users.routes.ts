import { Router } from "express";

const usersRouter = Router();

usersRouter.post("users/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.end();
});

usersRouter.post("users/signup", (req, res) => {
  const { email, password, name } = req.body;
  console.log(email, password, name);
  res.end();
});

usersRouter.get("users/logout", (req, res) => {
  res.end();
});

export { usersRouter };
