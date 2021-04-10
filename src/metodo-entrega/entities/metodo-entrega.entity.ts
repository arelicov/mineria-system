import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Compra } from '../../compra/entities/compra.entity';

@Entity('METODO_ENTREGA', { schema: 'dataMusic' })
export class MetodoEntrega {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id_Metodo_Entrega' })
  idMetodoEntrega: number;

  @Column('varchar', { name: 'Metodo de entrega', length: 30 })
  metodoDeEntrega: string;

  @OneToMany(() => Compra, (compra) => compra.idMetodoEntrega2)
  compras: Compra[];
}
