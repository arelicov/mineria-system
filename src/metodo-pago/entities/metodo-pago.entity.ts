import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Compra } from '../../compra/entities/compra.entity';

@Entity('METODO_PAGO', { schema: 'dataMusic' })
export class MetodoPago {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id_Metodopago' })
  idMetodopago: number;

  @Column('varchar', { name: 'Metodo_pago', length: 30 })
  metodoPago: string;

  @OneToMany(() => Cliente, (cliente) => cliente.idMetodopago2)
  clientes: Cliente[];

  @OneToMany(() => Compra, (compra) => compra.idMetodoPago2)
  compras: Compra[];
}
