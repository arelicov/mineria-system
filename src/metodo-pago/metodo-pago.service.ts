import { Injectable } from '@nestjs/common';
import { CreateMetodoPagoDto } from './dto/create-metodo-pago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodo-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodoPago } from './entities/metodo-pago.entity';

@Injectable()
export class MetodoPagoService {
  constructor(
    @InjectRepository(MetodoPago)
    private metodoPagoRepository: Repository<MetodoPago>,
  ) {}

  create(createMetodoPagoDto: CreateMetodoPagoDto) {
    return 'This action adds a new metodoPago';
  }

  findAll() {
    return this.metodoPagoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} metodoPago`;
  }

  update(id: number, updateMetodoPagoDto: UpdateMetodoPagoDto) {
    return `This action updates a #${id} metodoPago`;
  }

  remove(id: number) {
    return `This action removes a #${id} metodoPago`;
  }
}
