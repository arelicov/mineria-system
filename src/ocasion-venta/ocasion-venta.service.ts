import { Injectable } from '@nestjs/common';
import { CreateOcasionVentaDto } from './dto/create-ocasion-venta.dto';
import { UpdateOcasionVentaDto } from './dto/update-ocasion-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OcasionVenta } from './entities/ocasion-venta.entity';

@Injectable()
export class OcasionVentaService {
  constructor(
    @InjectRepository(OcasionVenta)
    private ocasionVentaRepository: Repository<OcasionVenta>,
  ) {}

  create(createOcasionVentaDto: CreateOcasionVentaDto) {
    return 'This action adds a new ocasionVenta';
  }

  findAll() {
    return `This action returns all ocasionVenta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ocasionVenta`;
  }

  update(id: number, updateOcasionVentaDto: UpdateOcasionVentaDto) {
    return `This action updates a #${id} ocasionVenta`;
  }

  remove(id: number) {
    return `This action removes a #${id} ocasionVenta`;
  }
}
