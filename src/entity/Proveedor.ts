
import { Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { Producto } from "./Producto";

@Entity()
export class Proveedor {
    @PrimaryColumn()
    Codigo_proveedor: number;

    @Column({ length: 45, nullable: false })
    Nombre_proveedor: string;

    @Column({ length: 45, nullable: false })
    Apellido_proveedor: string;

    @Column({ length: 70, nullable: false })
    Direccion_proveedor: string;

    @Column({ length: 45, nullable: false })
    Provincia_proveedor: string;

    @Column({ nullable: false })
    Telefono_proveedor: number;

    @OneToMany(() => Producto, (producto) => producto.proveedor)
    productos: Producto[]
}