import { Injectable } from '@nestjs/common';
import { CreateSubgeneroDto } from './dto/create-subgenero.dto';
import { UpdateSubgeneroDto } from './dto/update-subgenero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subgenero } from './entities/subgenero.entity';

@Injectable()
export class SubgeneroService {
  constructor(
    @InjectRepository(Subgenero)
    private subgeneroRepository: Repository<Subgenero>,
  ) {}

  create(createSubgeneroDto: CreateSubgeneroDto) {
    return 'This action adds a new subgenero';
  }

  findAll() {
    return this.subgeneroRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} subgenero`;
  }

  update(id: number, updateSubgeneroDto: UpdateSubgeneroDto) {
    return `This action updates a #${id} subgenero`;
  }

  remove(id: number) {
    return `This action removes a #${id} subgenero`;
  }
}
