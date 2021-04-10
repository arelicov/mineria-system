import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { MetodoEntrega } from '../../metodo-entrega/entities/metodo-entrega.entity';
import { MetodoPago } from '../../metodo-pago/entities/metodo-pago.entity';
import { OcasionVenta } from '../../ocasion-venta/entities/ocasion-venta.entity';
import { Productos } from '../../productos/entities/productos.entity';
import { Trabajadores } from '../../trabajadores/entities/trabajadores.entity';

@Index('Id_MetodoPago', ['idMetodoPago'], {})
@Index('Id_Ocasion_Venta', ['idOcasionCompra'], {})
@Index('COMPRA_CLIENTE_Id_Cliente_fk', ['idCliente'], {})
@Index('COMPRA_PRODUCTOS_Id_Articulo_fk', ['idArticulo'], {})
@Index('COMPRA_TRABAJADORES_Id_Trabajador_fk', ['idTrabajador'], {})
@Index('COMPRA_METODO_ENTREGA_Id_Metodo_Entrega_fk', ['idMetodoEntrega'], {})
@Entity('COMPRA', { schema: 'dataMusic' })
export class Compra {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id_compra' })
  idCompra: number;

  @Column('int', { name: 'Id_Trabajador', nullable: true })
  idTrabajador: number | null;

  @Column('int', { name: 'Id_Articulo', nullable: true })
  idArticulo: number | null;

  @Column('int', { name: 'Id_MetodoPago', nullable: true })
  idMetodoPago: number | null;

  @Column('int', { name: 'Id_Ocasion_Compra' })
  idOcasionCompra: number;

  @Column('int', { name: 'Id_Metodo_Entrega', nullable: true })
  idMetodoEntrega: number | null;

  @Column('int', { name: 'Unidades' })
  unidades: number;

  @Column('double', { name: 'Comision', precision: 22 })
  comision: number;

  @Column('date', { name: 'Fecha' })
  fecha: string;

  @Column('int', { name: 'Id_cliente' })
  idCliente: number;

  @Column('varchar', { name: 'Entrega_Calle_Num', nullable: true, length: 50 })
  entregaCalleNum: string | null;

  @Column('varchar', { name: 'Entrega_Col', nullable: true, length: 50 })
  entregaCol: string | null;

  @Column('varchar', { name: 'Entrega_mun', nullable: true, length: 50 })
  entregaMun: string | null;

  @Column('varchar', { name: 'Entrega_edo', nullable: true, length: 50 })
  entregaEdo: string | null;

  @Column('varchar', { name: 'Entrega_cp', nullable: true, length: 50 })
  entregaCp: string | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.compras, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Id_cliente', referencedColumnName: 'idCliente' }])
  idCliente2: Cliente;

  @ManyToOne(() => MetodoEntrega, (metodoEntrega) => metodoEntrega.compras, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([
    { name: 'Id_Metodo_Entrega', referencedColumnName: 'idMetodoEntrega' },
  ])
  idMetodoEntrega2: MetodoEntrega;

  @ManyToOne(() => MetodoPago, (metodoPago) => metodoPago.compras, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Id_MetodoPago', referencedColumnName: 'idMetodopago' }])
  idMetodoPago2: MetodoPago;

  @ManyToOne(() => OcasionVenta, (ocasionVenta) => ocasionVenta.compras, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([
    { name: 'Id_Ocasion_Compra', referencedColumnName: 'idOcasionVenta' },
  ])
  idOcasionCompra2: OcasionVenta;

  @ManyToOne(() => Productos, (productos) => productos.compras, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Id_Articulo', referencedColumnName: 'idArticulo' }])
  idArticulo2: Productos;

  @ManyToOne(() => Trabajadores, (trabajadores) => trabajadores.compras, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Id_Trabajador', referencedColumnName: 'idTrabajador' }])
  idTrabajador2: Trabajadores;
}
