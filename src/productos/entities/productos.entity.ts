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
import { Inventario } from '../../inventario/entities/inventario.entity';
import { Formato } from '../../formato/entities/formato.entity';
import { Genero } from '../../genero/entities/genero.entity';

@Index('PRODUCTOS_FORMATO_Id_Formato_fk', ['idFormato'], {})
@Index('PRODUCTOS_GENERO_Id_Genero_fk', ['idGenero'], {})
@Entity('PRODUCTOS', { schema: 'dataMusic' })
export class Productos {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id_Articulo' })
  idArticulo: number;

  @Column('int', { name: 'Id_Formato' })
  idFormato: number;

  @Column('int', { name: 'Id_Genero' })
  idGenero: number;

  @Column('varchar', { name: 'Titulo', length: 100 })
  titulo: string;

  @Column('varchar', { name: 'Artista', length: 100 })
  artista: string;

  @Column('int', { name: 'Precio' })
  precio: number;

  @Column('varchar', { name: 'SKU', length: 100 })
  sku: string;

  @Column('int', { name: 'Año' })
  aO: number;

  @Column('varchar', { name: 'Pais', length: 100 })
  pais: string;

  @Column('varchar', { name: 'Idioma', length: 50 })
  idioma: string;

  @OneToMany(() => Compra, (compra) => compra.idArticulo2)
  compras: Compra[];

  @OneToMany(() => Inventario, (inventario) => inventario.idArticulo2)
  inventarios: Inventario[];

  @ManyToOne(() => Formato, (formato) => formato.productos, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Id_Formato', referencedColumnName: 'idFormato' }])
  idFormato2: Formato;

  @ManyToOne(() => Genero, (genero) => genero.productos, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Id_Genero', referencedColumnName: 'idGenero' }])
  idGenero2: Genero;
}
