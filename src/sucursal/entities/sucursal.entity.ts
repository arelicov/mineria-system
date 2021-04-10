import { Column, Entity, OneToMany } from 'typeorm';
import { Inventario } from '../../inventario/entities/inventario.entity';
import { Trabajadores } from '../../trabajadores/entities/trabajadores.entity';

@Entity('SUCURSAL', { schema: 'dataMusic' })
export class Sucursal {
  @Column('int', { primary: true, name: 'Id_Sucursal' })
  idSucursal: number;

  @Column('varchar', { name: 'Sucursal_Nombre', length: 50 })
  sucursalNombre: string;

  @Column('varchar', { name: 'Sucursal_Telefono', length: 10 })
  sucursalTelefono: string;

  @Column('varchar', { name: 'Sucursal_Calle_num', length: 50 })
  sucursalCalleNum: string;

  @Column('varchar', { name: 'Sucursal_Col', length: 50 })
  sucursalCol: string;

  @Column('int', { name: 'Sucursal_cp' })
  sucursalCp: number;

  @Column('varchar', { name: 'Sucursal_Mun', length: 50 })
  sucursalMun: string;

  @Column('varchar', { name: 'Sucursal_Estado', length: 50 })
  sucursalEstado: string;

  @OneToMany(() => Inventario, (inventario) => inventario.idSurcursal2)
  inventarios: Inventario[];

  @OneToMany(() => Trabajadores, (trabajadores) => trabajadores.idSucursal2)
  trabajadores: Trabajadores[];
}
