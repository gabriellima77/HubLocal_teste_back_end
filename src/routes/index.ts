import { Router } from "express";

import { checkIfCompanyExists } from "../middlewares/checkIfCompanyExists";
import { checkIfLocationExists } from "../middlewares/checkIfLocationExists";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { empresasRouter } from "./empresas.routes";
import { locaisRouter } from "./locais.routes";
import { responsaveisRouter } from "./responsaveis.routes";
import { ticketsRouter } from "./tickets.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use(usersRouter);

router.use(ensureAuthenticated);
router.use("/empresas", empresasRouter);

router.use(checkIfCompanyExists);
router.use("/locais", locaisRouter);

router.use(checkIfLocationExists);
router.use("/responsaveis", responsaveisRouter);
router.use("/tickets", ticketsRouter);

export { router };
