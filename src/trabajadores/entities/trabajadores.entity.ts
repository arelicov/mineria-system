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
import { Sucursal } from '../../sucursal/entities/sucursal.entity';

@Index('TRABAJADORES_SUCURSAL_Id_Sucursal_fk', ['idSucursal'], {})
@Entity('TRABAJADORES', { schema: 'dataMusic' })
export class Trabajadores {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id_Trabajador' })
  idTrabajador: number;

  @Column('int', { name: 'Id_Sucursal', nullable: true })
  idSucursal: number | null;

  @Column('varchar', { name: 'Trabajador_Nombre', length: 50 })
  trabajadorNombre: string;

  @Column('varchar', { name: 'Trabajador_Apellido', length: 50 })
  trabajadorApellido: string;

  @Column('varchar', { name: 'Trabajador_Seguro_social', length: 50 })
  trabajadorSeguroSocial: string;

  @Column('varchar', { name: 'Tipo_trabajador', length: 50 })
  tipoTrabajador: string;

  @Column('varchar', {
    name: 'Trabajador_Telefono',
    nullable: true,
    length: 10,
  })
  trabajadorTelefono: string | null;

  @Column('varchar', { name: 'Trabajador_Calle_Num', length: 50 })
  trabajadorCalleNum: string;

  @Column('varchar', { name: 'Trabajador_col', length: 50 })
  trabajadorCol: string;

  @Column('int', { name: 'Trabajador_cp' })
  trabajadorCp: number;

  @Column('varchar', { name: 'Trabajador_mun', length: 50 })
  trabajadorMun: string;

  @Column('varchar', { name: 'Trabajador_estado', length: 50 })
  trabajadorEstado: string;

  @OneToMany(() => Compra, (compra) => compra.idTrabajador2)
  compras: Compra[];

  @ManyToOne(() => Sucursal, (sucursal) => sucursal.trabajadores, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Id_Sucursal', referencedColumnName: 'idSucursal' }])
  idSucursal2: Sucursal;
}
