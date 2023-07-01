import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Cabecera_factura } from "./Cabecera_factura";
import { Producto } from "./Producto";

@Entity()
export class Detalle_factura {

    @Column({ primary: true, nullable: false })
    IdFactura: number;

    @Column({ primary: true, nullable: false })
    Codigo_producto: number;

    @Column()
    cantidad: number;

    @ManyToOne(() => Cabecera_factura, cabecera_factura => cabecera_factura.detalle_factura)
    @JoinColumn({ name: 'IdFactura' })
    cabecera_factura: Cabecera_factura;

    @ManyToOne(() => Producto, producto => producto.detalle_factura)
    @JoinColumn({ name: 'Codigo_producto' })
    producto: Producto;


}
