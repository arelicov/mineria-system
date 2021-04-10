import { Module } from '@nestjs/common';
import { MetodoEntregaService } from './metodo-entrega.service';
import { MetodoEntregaController } from './metodo-entrega.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoEntrega } from './entities/metodo-entrega.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoEntrega])],
  controllers: [MetodoEntregaController],
  providers: [MetodoEntregaService],
  exports: [TypeOrmModule],
})
export class MetodoEntregaModule {}
