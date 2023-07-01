import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Cabecera_factura } from "./Cabecera_factura";

@Entity()
export class Vendedor {
  @PrimaryColumn()
  Codigo_vendedor: number;

  @Column({ length: 45, nullable: false })
  Nombre_vendedor: string;

  @Column({ length: 45, nullable: false })
  Apellido_vendedor: string;

  @Column({ length: 70, nullable: false })
  Direccion_vendedor: string;

  @Column({ nullable: false })
  Telefono_vendedor: number;

  @Column({ nullable: false })
  Celular_vendedor: number;

  @OneToMany(
    () => Cabecera_factura,
    (cabecera_factura) => cabecera_factura.vendedor
  )
  cabecera_facturas: Cabecera_factura[];
}
