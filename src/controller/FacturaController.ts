import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Cabecera_factura } from "../entity/Cabecera_factura";

class FacturaController {
  static getAll = async (req: Request, resp: Response) => {
    try {
      const repoFactura = AppDataSource.getRepository(Cabecera_factura);
      let fact;
      try {
        fact = await repoFactura.find({
          where: { estado: true },
          relations: { detalle_factura: true, vendedor: true, cliente: true },
        });
      } catch (error) {
        return resp
          .status(404)
          .json({ mensaje: "No se encontraron datos de la factura" });
      }
      return resp.status(200).json(fact);
    } catch (error) {
      return resp
        .status(400)
        .json({ mensaje: "Error al cargar las bases de datos" });
    }
  };

  static getById = async (req: Request, resp: Response) => {
    try {
      const IdFactura = parseInt(req.params["IdFactura"]);

      if (!IdFactura) {
        return resp
          .status(404)
          .json({ mensaje: "No se indica el codigo de la factura" });
      }

      const facturasRepo = AppDataSource.getRepository(Cabecera_factura);

      let factura;
      try {
        factura = await facturasRepo.findOneOrFail({
          where: { IdFactura },
          relations: { detalle_factura: true, vendedor: true, cliente: true },
        });
      } catch (error) {
        return resp
          .status(404)
          .json({ mensaje: "No se encontro ese código de factura" });
      }

      return resp.status(400).json({ factura });
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };

  static add = async (req: Request, resp: Response) => {};

  static update = async (req: Request, resp: Response) => {};

  static delete = async (req: Request, resp: Response) => {};
}

export default FacturaController;
