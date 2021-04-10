import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Compra } from '../../compra/entities/compra.entity';

@Entity('OCASION_VENTA', { schema: 'dataMusic' })
export class OcasionVenta {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id_Ocasion_Venta' })
  idOcasionVenta: number;

  @Column('varchar', { name: 'Ocasion_Venta', length: 50 })
  ocasionVenta: string;

  @OneToMany(() => Compra, (compra) => compra.idOcasionCompra2)
  compras: Compra[];
}
