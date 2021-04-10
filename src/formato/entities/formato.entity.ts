import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Productos } from '../../productos/entities/productos.entity';

@Entity('FORMATO', { schema: 'dataMusic' })
export class Formato {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id_Formato' })
  idFormato: number;

  @Column('varchar', { name: 'Formato', length: 50 })
  formato: string;

  @OneToMany(() => Productos, (productos) => productos.idFormato2)
  productos: Productos[];
}
