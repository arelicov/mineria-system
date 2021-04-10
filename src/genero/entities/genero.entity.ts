import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Productos } from '../../productos/entities/productos.entity';
import { Subgenero } from '../../subgenero/entities/subgenero.entity';

@Entity('GENERO', { schema: 'dataMusic' })
export class Genero {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id_Genero' })
  idGenero: number;

  @Column('varchar', { name: 'Genero', length: 30 })
  genero: string;

  @Column('varchar', { name: 'Clasificacion', length: 50 })
  clasificacion: string;

  @OneToMany(() => Productos, (productos) => productos.idGenero2)
  productos: Productos[];

  @OneToMany(() => Subgenero, (subgenero) => subgenero.idGenero2)
  subgeneros: Subgenero[];
}
