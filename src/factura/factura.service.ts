import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Factura } from './entities/factura.entity';
import { Compra } from '../compra/entities/compra.entity';
import { CompraService } from '../compra/compra.service';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura)
    private facturaRepository: Repository<Factura>,
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
  ) {}

  async create(ventaId: number): Promise<Compra> {
    try {
      const compra = await this.compraRepository.findOne(+ventaId);
      const factura = new Factura();
      factura.emisor = 'Master Music SA de CV';
      factura.postalcode = '64610';
      factura.cfdi = 'G03';

      const savedFactura = await this.facturaRepository.save(factura);
      compra.idFactura = savedFactura.id;

      return await this.compraRepository.save(compra);
    } catch (e) {
      throw new Error(e);
    }
  }

  findAll() {
    return `This action returns all factura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factura`;
  }

  update(id: number, updateFacturaDto: UpdateFacturaDto) {
    return `This action updates a #${id} factura`;
  }

  remove(id: number) {
    return `This action removes a #${id} factura`;
  }

  findCompra(id: number) {
    return this.compraRepository.findOne(id);
  }
}
