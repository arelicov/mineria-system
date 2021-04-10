import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genero } from '../../genero/entities/genero.entity';

@Index('Id_Genero', ['idGenero'], {})
@Entity('SUBGENERO', { schema: 'dataMusic' })
export class Subgenero {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id_Subgenero' })
  idSubgenero: number;

  @Column('int', { name: 'Id_Genero' })
  idGenero: number;

  @Column('varchar', { name: 'Subgenero', length: 100 })
  subgenero: string;

  @ManyToOne(() => Genero, (genero) => genero.subgeneros, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Id_Genero', referencedColumnName: 'idGenero' }])
  idGenero2: Genero;
}
