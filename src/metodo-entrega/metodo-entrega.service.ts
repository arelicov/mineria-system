import { Injectable } from '@nestjs/common';
import { CreateMetodoEntregaDto } from './dto/create-metodo-entrega.dto';
import { UpdateMetodoEntregaDto } from './dto/update-metodo-entrega.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodoEntrega } from './entities/metodo-entrega.entity';

@Injectable()
export class MetodoEntregaService {
  constructor(
    @InjectRepository(MetodoEntrega)
    private metodoEntregaRepository: Repository<MetodoEntrega>,
  ) {}

  create(createMetodoEntregaDto: CreateMetodoEntregaDto) {
    return 'This action adds a new metodoEntrega';
  }

  findAll() {
    return `This action returns all metodoEntrega`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metodoEntrega`;
  }

  update(id: number, updateMetodoEntregaDto: UpdateMetodoEntregaDto) {
    return `This action updates a #${id} metodoEntrega`;
  }

  remove(id: number) {
    return `This action removes a #${id} metodoEntrega`;
  }
}
