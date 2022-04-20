import { Router } from "express";

import { checkIfCompanyExists } from "../middlewares/checkIfCompanyExists";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { empresasRouter } from "./empresas.routes";
import { locaisRouter } from "./locais.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use(usersRouter);

router.use(ensureAuthenticated);
router.use("/empresas", empresasRouter);

router.use(checkIfCompanyExists);
router.use("/locais", locaisRouter);

export { router };
