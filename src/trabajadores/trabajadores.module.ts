import { Module } from '@nestjs/common';
import { TrabajadoresService } from './trabajadores.service';
import { TrabajadoresController } from './trabajadores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trabajadores } from './entities/trabajadores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trabajadores])],
  controllers: [TrabajadoresController],
  providers: [TrabajadoresService],
})
export class TrabajadoresModule {}
