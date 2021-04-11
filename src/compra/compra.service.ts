import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './entities/compra.entity';

@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
  ) {}

  create(createCompraDto: CreateCompraDto) {
    const compra = new Compra();
    compra.idTrabajador = +createCompraDto.idTrabajador;
    compra.idArticulo = +createCompraDto.idArticulo;
    compra.idMetodoPago = +createCompraDto.idMetodopago;
    compra.idOcasionCompra = +createCompraDto.idOCasionCompra;
    compra.idMetodoEntrega = +createCompraDto.idMetodoEntrega;
    compra.idCliente = +createCompraDto.idCliente;
    compra.unidades = +createCompraDto.unidades;
    compra.comision = +createCompraDto.comision;
    compra.fecha = createCompraDto.fecha;
    compra.entregaCalleNum = createCompraDto.entregaCalleNum;
    compra.entregaCol = createCompraDto.entregaCol;
    compra.entregaMun = createCompraDto.entregaMun;
    compra.entregaEdo = createCompraDto.entregaEdo;
    compra.entregaCp = createCompraDto.entregaCp;

    return this.compraRepository.save(compra);
  }

  findAll() {
    return this.compraRepository.find({
      relations: [
        'idCliente2',
        'idTrabajador2',
        'idArticulo2',
        'idArticulo2.idFormato2',
        'idMetodoPago2',
        'idOcasionCompra2',
        'idMetodoEntrega2',
      ],
    });
  }

  findOne(id: number) {
    return this.compraRepository.findOne(+id, {
      relations: [
        'idTrabajador2',
        'idCliente2',
        'idArticulo2',
        'idArticulo2.idFormato2',
        'idOcasionCompra2',
        'idMetodoEntrega2',
        'idMetodoPago2',
        'idFactura2',
      ],
    });
  }

  async remove(id: number) {
    const compra = await this.compraRepository.findOne(id);
    return this.compraRepository.remove(compra);
  }
}
