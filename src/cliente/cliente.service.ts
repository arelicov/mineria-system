import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const cliente = new Cliente();
    cliente.idMetodopago = +createClienteDto.metodoPago;
    cliente.usuario = createClienteDto.usuario;
    cliente.correoElectronico = createClienteDto.correoElectronico;
    cliente.nombre = createClienteDto.nombre;
    cliente.apellidos = createClienteDto.apellidos;
    cliente.edad = +createClienteDto.edad;
    cliente.genero = createClienteDto.genero;
    cliente.numTelefono = createClienteDto.numTelefono;
    cliente.rfc = createClienteDto.rfc;
    cliente.fechaNacimiento = createClienteDto.fechaNacimiento;
    cliente.calleNum = createClienteDto.calleNum;
    cliente.colonia = createClienteDto.colonia;
    cliente.cp = +createClienteDto.cp;
    cliente.municipio = createClienteDto.municipio;

    try {
      return await this.clienteRepository.save(cliente);
    } catch (e) {
      throw Error(e);
    }
  }

  findAll() {
    return this.clienteRepository.find();
  }

  findOne(id: number) {
    return this.clienteRepository.findOne({
      where: { idCliente: id },
      relations: ['idMetodopago2'],
    });
  }

  async remove(id: number) {
    const client = await this.clienteRepository.findOne(id);
    await this.clienteRepository.remove(client);
  }
}
