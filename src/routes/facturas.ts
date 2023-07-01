import { Router } from "express";
import FacturaController from "../controller/FacturaController";

const routes = Router();

routes.get("", FacturaController.getAll);
routes.get("/:IdFactura", FacturaController.getById);

export default routes;
