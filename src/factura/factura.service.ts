import { forwardRef, Inject, Injectable } from '@nestjs/common';
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
    @Inject(forwardRef(() => CompraService))
    private compraRepository: Repository<Compra>,
  ) {}

  async create(ventaId: number) {
    const venta = await this.compraRepository.findOne(ventaId);
    const factura = new Factura();

    factura.idVenta = venta.idCompra;
    factura.emisor = 'Master Music SA de CV';
    factura.postalcode = '64610';
    factura.cfdi = 'G03';

    return this.facturaRepository.save(factura);
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

  findFromCompra(id: number) {
    return this.facturaRepository.find({ where: { idVenta: id } });
  }
}
