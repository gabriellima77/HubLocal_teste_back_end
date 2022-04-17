import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { empresasRouter } from "./empresas.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use(usersRouter);

router.use(ensureAuthenticated);
router.use("/empresas", empresasRouter);

export { router };
