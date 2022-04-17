import { Router } from "express";

import { empresasRouter } from "./empresas.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/", usersRouter);

router.use("empresas", empresasRouter);

export { router };
