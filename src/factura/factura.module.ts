import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaController } from './factura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './entities/factura.entity';
import { CompraService } from '../compra/compra.service';
import { CompraModule } from '../compra/compra.module';

@Module({
  imports: [TypeOrmModule.forFeature([Factura]), CompraModule],
  controllers: [FacturaController],
  providers: [FacturaService, CompraService],
  exports: [TypeOrmModule],
})
export class FacturaModule {}
