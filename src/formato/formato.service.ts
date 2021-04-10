import { Injectable } from '@nestjs/common';
import { CreateFormatoDto } from './dto/create-formato.dto';
import { UpdateFormatoDto } from './dto/update-formato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formato } from './entities/formato.entity';

@Injectable()
export class FormatoService {
  constructor(
    @InjectRepository(Formato)
    private formatoRepository: Repository<Formato>,
  ) {}

  create(createFormatoDto: CreateFormatoDto) {
    return 'This action adds a new formato';
  }

  findAll() {
    return this.formatoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} formato`;
  }

  update(id: number, updateFormatoDto: UpdateFormatoDto) {
    return `This action updates a #${id} formato`;
  }

  remove(id: number) {
    return `This action removes a #${id} formato`;
  }
}
