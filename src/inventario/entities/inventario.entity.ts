import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Productos } from '../../productos/entities/productos.entity';
import { Sucursal } from '../../sucursal/entities/sucursal.entity';

@Index('Id_Articulo', ['idArticulo'], {})
@Index('Id_Surcursal', ['idSurcursal'], {})
@Entity('INVENTARIO', { schema: 'dataMusic' })
export class Inventario {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id_Inventario' })
  idInventario: number;

  @Column('int', { name: 'Id_Articulo' })
  idArticulo: number;

  @Column('int', { name: 'Id_Surcursal' })
  idSurcursal: number;

  @Column('int', { name: 'Cantidad', nullable: true })
  cantidad: number | null;

  @Column('varchar', { name: 'Seccion', length: 50 })
  seccion: string;

  @Column('varchar', { name: 'Pasillo', length: 10 })
  pasillo: string;

  @Column('varchar', { name: 'Estante', length: 10 })
  estante: string;

  @ManyToOne(() => Productos, (productos) => productos.inventarios, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Id_Articulo', referencedColumnName: 'idArticulo' }])
  idArticulo2: Productos;

  @ManyToOne(() => Sucursal, (sucursal) => sucursal.inventarios, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Id_Surcursal', referencedColumnName: 'idSucursal' }])
  idSurcursal2: Sucursal;
}
