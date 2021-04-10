import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Compra } from '../../compra/entities/compra.entity';

@Index('table_name_COMPRA_Id_compra_fk', ['idVenta'], {})
@Entity('FACTURA', { schema: 'dataMusic' })
export class Factura {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'id_venta', nullable: true })
  idVenta: number | null;

  @Column('varchar', { name: 'emisor', nullable: true, length: 50 })
  emisor: string | null;

  @Column('varchar', { name: 'postalcode', nullable: true, length: 5 })
  postalcode: string | null;

  @Column('varchar', { name: 'cfdi', nullable: true, length: 5 })
  cfdi: string | null;

  @OneToMany(() => Compra, (compra) => compra.idFactura2)
  compras: Compra[];

  @ManyToOne(() => Compra, (compra) => compra.facturas, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_venta', referencedColumnName: 'idCompra' }])
  idVenta2: Compra;
}
