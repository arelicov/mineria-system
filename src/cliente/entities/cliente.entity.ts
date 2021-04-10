import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MetodoPago } from '../../metodo-pago/entities/metodo-pago.entity';
import { Compra } from '../../compra/entities/compra.entity';

@Index('Id_Metodopago', ['idMetodopago'], {})
@Entity('CLIENTE', { schema: 'dataMusic' })
export class Cliente {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id_Cliente' })
  idCliente: number;

  @Column('int', { name: 'Id_Metodopago', nullable: true })
  idMetodopago: number | null;

  @Column('varchar', { name: 'Usuario', length: 50 })
  usuario: string;

  @Column('varchar', { name: 'Correo_Electronico', length: 100 })
  correoElectronico: string;

  @Column('varchar', { name: 'Nombre', length: 30 })
  nombre: string;

  @Column('varchar', { name: 'Apellidos', length: 30 })
  apellidos: string;

  @Column('int', { name: 'Edad' })
  edad: number;

  @Column('varchar', { name: 'Genero', length: 30 })
  genero: string;

  @Column('varchar', { name: 'Num_Telefono', length: 10 })
  numTelefono: string;

  @Column('varchar', { name: 'Preferencias', nullable: true, length: 50 })
  preferencias: string | null;

  @Column('varchar', { name: 'RFC', nullable: true, length: 30 })
  rfc: string | null;

  @Column('date', { name: 'Fecha_Nacimiento' })
  fechaNacimiento: string;

  @Column('varchar', { name: 'Favoritos', nullable: true, length: 30 })
  favoritos: string | null;

  @Column('varchar', { name: 'Calle_num', length: 100 })
  calleNum: string;

  @Column('varchar', { name: 'Colonia', length: 50 })
  colonia: string;

  @Column('int', { name: 'Cp' })
  cp: number;

  @Column('varchar', { name: 'Municipio', length: 50 })
  municipio: string;

  @ManyToOne(() => MetodoPago, (metodoPago) => metodoPago.clientes, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'Id_Metodopago', referencedColumnName: 'idMetodopago' }])
  idMetodopago2: MetodoPago;

  @OneToMany(() => Compra, (compra) => compra.idCliente2)
  compras: Compra[];
}
