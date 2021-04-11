import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Compra } from '../../compra/entities/compra.entity';

@Entity('FACTURA', { schema: 'dataMusic' })
export class Factura {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'emisor', nullable: true, length: 50 })
  emisor: string | null;

  @Column('varchar', { name: 'postalcode', nullable: true, length: 5 })
  postalcode: string | null;

  @Column('varchar', { name: 'cfdi', nullable: true, length: 5 })
  cfdi: string | null;

  @OneToOne(() => Compra)
  compra: Compra;
}
